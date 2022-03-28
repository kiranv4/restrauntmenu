import React, { useState } from "react";
import"./base/style.css";
import Menu from "./menuApi";
import MenuCard from "./base/menucard";




const uniqueList = [
  ...new Set(
  Menu.map((curElement)=>{
    return curElement.category;
  })
)
];
console.log(uniqueList);
  
  

const Restaurant=()=>{
    const[menuData, setMenuData]=useState(Menu);


    const filterItem=(category)=>{
      const updatedList= Menu.filter((curElement)=>{
        return curElement.category===category;
      });
      setMenuData(updatedList);
    };

      return (
        <>
        <nav className="navbar">
           <div className="btn-group">
                  <button
                   className="btn-group__item"
                    onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button
                    className="btn-group__item"
                    onClick={() => filterItem("lunch")}>Lunch</button>
                    <button
                    className="btn-group__item"
                    onClick={() => filterItem("evening")}>Evening</button>
                    <button
                    className="btn-group__item"
                    onClick={() => filterItem("dinner")}>Dinner</button>
                    <button
                    className="btn-group__item"
                    onClick={() => setMenuData(Menu)}>All</button>
              
            </div>
          </nav>
        <MenuCard menuData={menuData}></MenuCard>
        </>
        
        
        
          
        
 )
 }

export default Restaurant;