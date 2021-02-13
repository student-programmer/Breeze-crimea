import { PropTypes } from 'prop-types';
import React from 'react'
import airb from "./AirBlock.module.css";
const Machine = ({category, price, imageUrl }) => {
    return (
        <div className={airb.chef}>
            <div>
                <img className={airb.image} src={imageUrl} alt=""/>
            </div>
            <div>
                <p className={airb.textAir}>{category}</p>
            </div>
            <div>
                <p className={airb.textAir}>{price}</p>
            </div>
        </div>
    )
}
Machine.propTypes = {
    category: PropTypes.string,
    price: PropTypes.string,
    imageUrl:PropTypes.string,
};
Machine.defaultProps = {
    category: '---',
    price: 0,
    imageUrl:"",
}
export default Machine
