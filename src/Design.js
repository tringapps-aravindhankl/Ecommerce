import "./Design.css";
import {Link } from 'react-router-dom';
function Design({count}){
    return(
        <>
    <div className="whole-header">
        <div className="first-Grid">
            <h1>Shirt store</h1>
        </div>
        <div className="second-Grid">
            <Link to="/">
                <p>Home</p>
            </Link>
        </div>
        <div className="second-Grid">
            <Link to="/Men">
                <p>Formal</p>
            </Link>
        </div>
        <div className="second-Grid">
            <Link to="/Girls"><p>Pants</p></Link>
        </div>
        <div className="second-Grid">
            <Link to="/Kids"><p>Kids</p></Link>
        </div>
        <div className="second-Grid">
        <Link to="/Cart"><p>🛒Cart
            <span>{count}</span>
            </p></Link>
        </div>
    </div>
        </>
    )
}

export default Design
