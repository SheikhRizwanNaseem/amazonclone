import React from 'react'
import './Product.css'

function Product({id , tittle, price , ratting, img}) {
    return (
        <div className="product">
            <div className="productinfo">
            <p><strong>{tittle}</strong></p>
            <div className="price">
            <small>$</small>
            <p><strong>{price}</strong></p>
            </div>
        
            <div className="ratting">
                {
                    Array(ratting).fill()
                    .map(()=> (<p>⭐</p>))
                }
            </div>
            </div>
            
            
            <img src={img} alt=""/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
