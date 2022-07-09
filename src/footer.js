import { useState } from "react";

const Footer = () => {

    const [ isPending, setIsPending ] = useState(false);

    const fetchData = async () => {
        const response = await fetch('https://eldenring.fanapis.com/api/ammos?limit=100');
        const data = await response.json();
        console.log(data.data);
        setIsPending(true); 
        fetch('http://localhost:8000/ammunitions', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
            })
            .then(() => {
                setIsPending(false);
            })
        return data; 
    }

    return ( 
        <div className="footer-container">
            <div className="footer-info">
                This project is a work in progress. Any and all bugs, or incorrect
                information found would be very helpful to know. Please send me a 
                message through 'Contact Me'. Thank you!
            </div>
            <div className="footer-links">
                <ul>
                    <li>Home</li>
                    <li>Contact Me</li>
                    <li>Back to top</li>
                    <button onClick={(() => fetchData())}>Console.log</button>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;