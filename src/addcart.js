import "./Home.css";

const Addcart = (props)=>{
    const Remove =(item)=>{
     props.newCartItems.splice(props.newCartItems.findIndex(i => i.id === item.id), 1)
     props.setSelectItem(props.newCartItems)
    }
    
    return(
        <div className="homee">
              {
                props.newCartItems.map(item=>
                        <div key={item.id}>
                            <img src={item.img} alt=""/>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <button onClick={()=>Remove(item)}>RemoveCart</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Addcart;