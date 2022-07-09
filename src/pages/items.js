import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Items = () => {

    // useEffect(() => {
    //     fetchData(); 
    // })

    const { name } = useParams();  
    // const { data, isPending, error } = useFetch('http://localhost:8000/' + name);
    const { data, isPending, error } = useFetch('http://localhost:8005/Items')
    let newData = []; 

    // const fetchData = async () => {
    //     const response = await fetch('http://localhost:8005/Items');
    //     const data = await response.json();
    //     fetched = data; 
    //     console.log(fetched);
    //     return fetched; 
    // }

   if(data)
   { 
    newData = data.filter(items => items.type === name.charAt(0).toUpperCase() + name.slice(1))
    
   }

    return ( 
        <div className="items-display-container">
            <button onClick={(() => console.log(newData))}>Click Me</button>
            <div className="items-name">
                { name.charAt(0).toUpperCase() + name.slice(1) }
            </div>
            { newData && 
            <div className="items-details-container">
                { newData && newData.map(items => (
                    <div className="items-details">
                        <Link to={`/itemdetails/${ items.name }`} state={{ items: items, name: name }}>
                            <div>
                                <img style={{ height: '100px', width: '100px' }} src={ items.image } alt={items.name}></img>
                                <h3 style={{ textAlign: 'center'}}>{ items.name }</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>}
        </div>
     );
}
 
export default Items;