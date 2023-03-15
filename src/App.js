import React, { useState } from "react";
import Design from "./Design";
import Navbar from "./nav";
import Home from "./Home";
import './App.css';
import Addcart from "./addcart";
import Men from "./Men.js"
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
let App = () => {

  const[selectItem,setSelectItem] = useState('');
  const newCartItems = [...selectItem]
  const[cartItems, setCartItems]=useState('');

  const button=(item)=>{
    const index=newCartItems.findIndex((cartItem)=> cartItem.id===item.id);
    return index >= 0;
  }

  const arr=[
    {
      id:1,
      img: require("./a.jpg"),
      name:"OTTO-SHIRT",
      price:"1200"
    },
    {
      id:2,
      img: require("./b.jpg"),
      name:"PeterEngland",
      price:"1999"
    },
    {
      id:3,
      img:require("./c.jpg"),
      name:"Adidas",
      price:"99"
    },
    {
      id:4,
      img:require("./d.jpg"),
      name:"Calvin Klein",
      price:"799"
    },
    {
      id:5,
      img:require("./e.jpg"),
      name:"Levis",
      price:"379"
    },
    {
      id:6,
      img:require("./f.jpg"),
      name:"OTTO",
      price:"299"
    },
    {
      id:7,
      img:require("./h.jpg"),
      name:"Adidas",
      price:"599"
    },
    {
      id:8,
      img:require("./b.jpg"),
      name:"Carlo",
      price:"899"
    },
    {
      id:9,
      img:require("./a.jpg"),
      name:"shirt",
      price:"599"
    },
  ]

  const addItem = (item) => {
    const index = newCartItems.findIndex((i) => i.id === item.id);
    if (index >= 0) {
        newCartItems.splice(newCartItems.findIndex(i => i.id === item.id), 1)
    } else {
        newCartItems.push({ ...item });
    }
    setSelectItem(newCartItems);
    {console.log(newCartItems)}
};
  return (
    <div>
      <Switch>
        <div className="App">
        <Design count={newCartItems.length}/>
        <div className="body">
          <Navbar className='left' />
          <Routes>
            <Route exact path = "/Cart" element={<Addcart setSelectItem={setSelectItem} newCartItems={newCartItems}></Addcart>}></Route>
            <Route exact path="/" element={
              <Home className='right' arr={arr} addItem={addItem} button={button}/>
            }></Route>
            <Route exact path="/Men" element={<Men name={arr} />}></Route>

          </Routes>
        </div>
        </div>
      </Switch>
    </div>
  );
}
export default App;
