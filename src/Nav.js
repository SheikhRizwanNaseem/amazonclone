import React from 'react'
import './Nav.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Nav2() {
    return (
        <div className="nav">
            <div className="location">
            <div className="icon">
                    <LocationOnIcon></LocationOnIcon>
                  </div>

                  <div className="text">
                  <text>DelieverTo</text>
                  <h4>Pakistan</h4>
                  </div>
                  
                 
                     
            </div>
            <div className="middle">
                <div className="deas">
                <h4 className="a">Today's Deal</h4>

                </div>
                <div className="cs">
                <h4 className="b">Customer Services</h4>

                </div>
                <div className="gc">
                <h4 className="c">Gift Cards</h4>

                </div>
                <div className="rej">
                <h4 className="d">Registry</h4>

                </div>
                <div className="sell">
                <h4 className="e">Sell</h4>

                </div>

            </div>
            <div className="last">
            <h4 >Amazon Responce to Covid19</h4>

            </div>
        </div>
    )
}

export default Nav2
