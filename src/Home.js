import "./Home.css"
function Home(props){
    const Data=props.arr;
    return(
        <div className="homee">
              {
                Data.map(item=>{
                    return(
                        <div key={item.id} className="margin-div">
                            <img src={item.img} alt=""/>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <button onClick={()=>props.addItem(item)}>{props.button(item)?"RemoveCart":"AddCart"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;