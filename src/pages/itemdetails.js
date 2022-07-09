import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const ItemDetails = () => {

    useEffect(() => {
        fetchData(); 
    })
   
    const location = useLocation(); 
    const data = location.state;  
    let fetched = null; 

    const fetchData = async () => {
        const response = await fetch('http://localhost:8005/Items');
        const data = await response.json();
        fetched = data; 
        return fetched; 
    }

    console.log(data.name)
    
    return ( 
        <div className="home-container" style={{ color: "white"}}>
            <div className="item-details-container">
                <div className="item-details-image">
                    <img src={data.items.image} alt=""></img>
                </div>
                <div className="items-name">
                    { data.items.name.charAt(0).toUpperCase() + data.items.name.slice(1) }
                </div>
                <div className="item-details-description">
                        { data.items.description}
                </div>
                <div className="item-details-effect-title">
                    Details
                </div>
                <div className="item-details-effect">
                    {data.items.effect}
                </div>
                {/* Containers dependent on parameters which load the correct div */}
                {data.name === "crafting" &&
                <div className="crafting-container">
                    <p style={{marginBottom: "15px"}}>Can be used to craft: </p>
                    {data.items.crafted.map(items =>(
                        <li style={{marginBottom: "10px"}}>
                            <Link to={`/itemdetails/${items}`}>{items}</Link>
                        </li>
                    ))}
                </div>}
                {data.name === "tools" &&
                <div className="crafting-container">
                    <p style={{marginBottom: "15px"}}>Can be found at: </p>
                    {data.items.location.map(items =>(
                        <li style={{marginBottom: "10px"}}>
                            
                            {items.location} 
                            {items.links !== null && <a href={`${items.links}`}>Map Link</a>}
                        </li>
                    ))}
                </div>}
                {data.name === "remembrance" &&
                <div className="crafting-container">
                    <p style={{marginBottom: "15px"}}>Can be used to purchase: </p>
                    {data.items.purchase.map(items =>(
                        <li style={{marginBottom: "10px"}}>
                            {items.first}
                            <li>
                                {items.second}
                            </li>
                        </li>
                    ))}
                </div>}
                {data.name === "Crystal Tear" &&
                <div className="crafting-container">
                    <p style={{marginBottom: "15px"}}>Where to find: </p>
                    {data.items.location.map(items =>(
                        <li style={{marginBottom: "10px"}}>
                            <button onClick={(() => console.log(items.location))}>Console</button>
                            {items.location} 
                            {items.links !== null && <a href={`${items.links}`}>Map Link</a>}
                        </li>
                    ))}
                </div>}
                {data.name === "consumable" &&
                <div className="crafting-container">
                    {data.items.needs !== null && 
                    <p style={{marginBottom: "15px"}}>Can be crafted using: </p>
                    }
                    {data.items.needs !== null && data.items.needs.map(items =>(
                        <li style={{marginBottom: "10px"}}>
                            <button onClick={(() => console.log(items))}>Console</button>
                            {items.items}
                        </li>
                    ))}
                </div>}
                {data.name === "cookbooks" &&
                <div className="crafting-container">
                    <p style={{marginBottom: "15px"}}>Where to find: </p>
                    {data.items.location.map(items =>(
                        <li style={{marginBottom: "10px"}}>
                            <button onClick={(() => console.log(items.location))}>Console</button>
                            {items.location} 
                            {items.links !== null && <a href={`${items.links}`}>Map Link</a>}
                        </li>
                    ))}
                    <p style={{marginBottom: "15px"}}>Grants the ability to craft: </p>
                    {data.items.recipes.map(items =>(
                        <li>{items.name}</li>
                    ))}
                </div>}
            </div>
        </div>
     );
}
 
export default ItemDetails;