import "./nav.css"
function Navbar(){
    return(
        <div className="firstOne">
            <div>
               <p className="para">👕Top-Brand👕</p> 
               <a href="" className="FirstLink">OTTO</a>
               <a href="" className="FirstLink">PeterEngland</a>
               <a href="" className="FirstLink">Adidas</a>
               <a href="" className="FirstLink">Calvin Klein</a>
               <a href="" className="FirstLink">Monte Carlo</a>
               <a href="" className="FirstLink">Levi’s</a>
            </div>
            <div>
                <p className="para">👚Size👚</p>
                <a href="" className="FirstLink">S</a>
               <a href="" className="FirstLink">M</a>
               <a href="" className="FirstLink">L</a>
               <a href="" className="FirstLink">X</a>
               <a href="" className="FirstLink">XL</a>
               <a href="" className="FirstLink">XXL</a>
            </div>
        </div>
    )
}

export default Navbar;