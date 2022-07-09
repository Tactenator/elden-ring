import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="home-container error">
            Yo, where the fuck you think you at?
            Get your bitch ass back to <Link to={"/"}>Home</Link>
        </div>
     );
}
 
export default Error;