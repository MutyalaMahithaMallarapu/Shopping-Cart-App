import React from "react";
import OOPSImage from '../../Assets/OOPS.png'
import './SomethingWentWrongPage.css'

const SomethingWentWrongPage = () => {

    return(
        <div className="container">
        <img className="imageStyling" src={OOPSImage} alt="oopsImage"></img>
        <div>
        <h1>OOPS! Something went wrong</h1>
        </div>
        </div>
    )
}
export default SomethingWentWrongPage