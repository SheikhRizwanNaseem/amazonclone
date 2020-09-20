import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div className="header">

          <div className="header_dehaze">
      <DehazeIcon style={{color:"white" , height:"42px" , width:"40px" , marginLeft:"50px"}}></DehazeIcon>
          </div>

          <div className="header_logo" >
         
               <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

          </div>

        
         <div className="header_searchbar">
           <div className="catagories" style={{backgroundColor:"whitesmoke" , display:"flex"}}>
           <h4 style={{marginTop:"10px"}}>ALL</h4>
           <ArrowDropDownIcon style={{marginTop:"15px"}}></ArrowDropDownIcon>
           </div>
           
           <input type="text" name="text" id="text"/>
           <SearchIcon style={{backgroundColor:"orange" , height:"42px" , width:"40px"}}></SearchIcon>

         </div>



          <div className="links">

                 <div className="linka">
                  <div className="text">
                  <text>Hello</text>
                  <h4>Account & List</h4>
                  </div>
                  
                  <div className="icon">
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                  </div>
                 
                 </div>

                 <div className="linkb">
                  <div className="text">
                  <text>Returns</text>
                  <h4>&Orders</h4>
                  </div>
                  
                  <div className="icon">
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                  </div>
                 
                 </div>

                 <div className="linkc">
                  <ShoppingCartIcon></ShoppingCartIcon>
                  <h3>Cart</h3>
                 
                 </div>


          </div>



        </div>
    )
}

export default Header
