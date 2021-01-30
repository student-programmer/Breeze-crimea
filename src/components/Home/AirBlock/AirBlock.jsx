import React from 'react'
import airb from "./AirBlock.module.css";
const Machine = ({name, price, imageUrl }) => {
    return (
        <div className={airb.chef}>
            <div>
                <img className={airb.image} src={imageUrl} alt=""/>
            </div>
            <div>
                <p className={airb.textAir}>{name}</p>
            </div>
            <div>
                <p className={airb.textAir}>{price}</p>
            </div>
        </div>
    )
}

export default Machine
