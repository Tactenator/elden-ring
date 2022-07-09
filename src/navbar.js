import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [ equipOpen, setEquipOpen ] = useState(false); 
    const [ itemsOpen, setItemsOpen ] = useState(false);

    useEffect(() =>
    {
        setEquipOpen(false);
        setItemsOpen(false);
        
    },[])

    const dropdown = (e) => 
    {
        const equipContainer = document.querySelector('.equipment-container');
        const equipNav = document.querySelector('.equipment');

        const itemsContainer = document.querySelector('.items-container');
        const itemsNav = document.querySelector('.items');
        const item = '.' + e.target.className; 
        if(item === '.equipment' && !equipOpen)
        {
            equipContainer.style.opacity = '100%';
            equipContainer.style.top = '68px';

            equipNav.style.background = 'black';
            equipNav.style.color = '#ddbf83';
            equipNav.classList.toggle("unselectable");
            setEquipOpen(true); 
        }
        else
        {
            equipContainer.style.opacity = 0;
            equipContainer.style.top = '-400px';

            document.querySelector('.sword-container').style.opacity = 0;
            document.querySelector('.spears-container').style.opacity = 0;

            document.querySelector('.sword-container').style.top = '-200%';
            document.querySelector('.spears-container').style.top = '-320%';

            equipNav.style.background = `rgb(${32}, ${32}, ${32})`;
            equipNav.style.color = 'white';
            equipNav.style.top = '-500px';
            equipNav.classList.toggle("unselectable");
            setEquipOpen(false); 
             
        }

        if(item === '.items' && !itemsOpen)
        {
            itemsContainer.style.opacity = '100%';
            itemsContainer.style.top = '68px';

            itemsNav.style.background = 'black';
            itemsNav.style.color = '#ddbf83';
            setItemsOpen(true); 
        }
        else
        {
            itemsContainer.style.opacity = 0;
            itemsContainer.style.top = '-400px';
            itemsNav.style.background = `rgb(${32}, ${32}, ${32})`;
            itemsNav.style.color = 'white';
            setItemsOpen(false); 
        } 
    }

    const openSwordList = () =>
    {
        document.querySelector('.sword-container').style.opacity = '100%';
        document.querySelector('.sword-container').style.top = '140%';
        document.querySelector('.spears-container').style.opacity = 0;
    }

    const openSpearList = () =>
    {
        document.querySelector('.spears-container').style.opacity = '100%';
        document.querySelector('.spears-container').style.top = '320%';
        document.querySelector('.sword-container').style.top = '-200%';
        document.querySelector('.sword-container').style.opacity = 0;
    }

    return ( 
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="home"><Link to="/">Home</Link></li>
                <li className="equipment" onClick={((e) => {dropdown(e)})}>Equipment</li>
                <li className="ashesWar"><Link to="/Ashes%20of%20War">Ashes of War</Link></li>
                <li className="sorceries"><Link to="/sorceries">Sorceries</Link></li>
                <li className="incantations"><Link to="/incantations">Incantations</Link></li>
                <li className="spiritsAshes"><Link to="/spirits%20ashes">Spirits Ashes</Link></li>
                <li className="talismans"><Link to="/talismans">Talismans</Link></li>
                <li className="items" onClick={((e) => {dropdown(e)})}>Items</li>
            </ul>
            <div className="equipment-container">
                <ul className="equipment-list unselectable">
                    <li className="equip"><Link to="/items/daggers">Daggers</Link></li>
                    <li className="equip" onClick={(() => openSwordList())}>Swords</li>
                    <li className="equip"><Link to="/items/axes">Axes</Link></li>
                    <li className="equip"><Link to="/items/hammer">Hammers</Link></li>
                    <li className="equip"><Link to="/items/flail">Flails</Link></li>
                    <li className="equip"><Link to="/items/colossal">Colossal</Link></li>
                    <li className="equip" onClick={(() => openSpearList())}>Spears</li>
                    <li className="equip"><Link to="/items/reapers">Reapers</Link></li>
                    <li className="equip"><Link to="/items/fist">Fist</Link></li>
                    <li className="equip"><Link to="/items/ranged">Ranged</Link></li>
                    <li className="equip"><Link to="/items/staffs">Staffs</Link></li>
                    <li className="equip"><Link to="/">Sacred Seals</Link></li>
                    <li className="equip"><Link to="/items/torch">Torches</Link></li>
                </ul>
            </div>
            <div className="sword-container">
                <ul className="swords-list">
                    <li><Link to="/items/straight%20swords">Straight Swords</Link></li>
                    <li><Link to="/items/thrusting%20swords">Thrusting Swords</Link></li>
                    <li><Link to="/items/greatswords">Greatswords</Link></li>
                    <li><Link to="/items/curved%20swords">Curved Swords</Link></li>
                    <li><Link to="/items/curved%20greatswords">Curved Greatswords</Link></li>
                    <li><Link to="/items/heavy%20thrusting%20swords">Heavy Thrusting Swords</Link></li>
                    <li><Link to="/items/colossal%20swords">Colossal Swords</Link></li>
                </ul>
            </div>
            <div className="spears-container">
                <ul className="spears-list">
                    <li><Link to="/items/spears">Spears</Link></li>
                    <li><Link to="/items/great%20spears">Great Spears</Link></li>
                    <li><Link to="/items/halberds">Halberds</Link></li>
                </ul>
            </div>
            <div className="items-container">
                <ul className="items-list">
                    <li><Link to="/items/crafting">Crafting</Link></li>
                    <li><Link to="/items/Crystal%20Tear">Crystal Tear</Link></li>
                    <li><Link to="/items/Key%20Item">Key Items</Link></li>
                    <li><Link to="/items/tools">Tools</Link></li>
                    <li><Link to="/items/consumable">Consumable</Link></li>
                    <li><Link to="/items/remembrance">Remembrance</Link></li>
                    <li><Link to="/items/Info%20Item">Info</Link></li>
                    <li><Link to="/items/multiplayer">Multiplayer</Link></li>
                    <li><Link to="/items/cookbooks">Cookbooks</Link></li>
                    <li><Link to="/items/Ammunitions">Ammunitions</Link></li>
                    <li><Link to="/items/upgrade">Upgrade</Link></li>
                    <li><Link to="/items/Whetblades">Whetblades</Link></li>
                    <li><Link to="/items/throwing">Throwing</Link></li>
                    <li><Link to="/items/pots">Pots</Link></li>
                    <li><Link to="/items/perfumes">Perfumes</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;