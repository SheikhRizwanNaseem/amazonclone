import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            
                <div className="banner">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" className="bannerimg"/>
                </div>
<div className="productrow">
             

                
                <Product  id={12345} 
                tittle="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
                price={297.05}
                ratting={3}
                img="https://image-us.samsung.com/SamsungUS/home/mobile/wearables/pdp/sm-r760ndaaxar/gallery/S3_Frontier_Left_1600x1200.jpg?$product-details-jpg$">

                </Product>

                
                <Product  id={12345} 
                tittle="NETGEAR WiFi Range Extender EX3700 - "
                price={207.05}
                ratting={5}
                img="https://images-na.ssl-images-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg">

                </Product>
                 
                <Product  id={12345} 
                tittle="amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)"
                price={227.05}
                ratting={4}
    img="https://images-na.ssl-images-amazon.com/images/I/61mJu3spvUL._AC_SY355_.jpg">

                </Product>

                <Product  id={12345} 
                tittle="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player "
                price={127.05}
                ratting={5}
    img="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg">

                </Product>
</div>
               
<div className="productrow" >
               <Product 
                id={12345} 
              tittle="Amazon Great Indian Festival: Buy the TCL 40-inch Full HD Smart TV at About Rs 12,000
                "
                price={327.05}
                ratting={4}
 img="https://images.news18.com/ibnlive/uploads/2019/10/TCL-40S62FS-40-inch-full-HD-smart-TV.jpg">

                </Product>

                <Product 
                id={12345} 
              tittle="Amazon Great Indian Festival: Buy the TCL 40-inch Full HD Smart TV at About Rs 12,000
                "
                price={327.05}
                ratting={4}
 img="https://images.news18.com/ibnlive/uploads/2019/10/TCL-40S62FS-40-inch-full-HD-smart-TV.jpg">

                </Product>
                
                
                
                

</div>



        </div>
    )
}

export default Home
