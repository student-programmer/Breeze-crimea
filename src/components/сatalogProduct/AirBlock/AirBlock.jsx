import { PropTypes } from 'prop-types';
import React from 'react'
import airb from "./AirBlock.module.css";
const Machine = ({category, price, imageUrl, onCkickAddAirs, id, addedAirs }) => {
    const onAddAirs = () =>{
        const obj = {
             id,
             category,
             imageUrl,
             price,
        }
         onCkickAddAirs(obj)
    }
    return (
        <div className={airb.chef}>
            <div>
                <img className={airb.image} src={imageUrl} alt=""/>
            </div>
            <div className={airb.airInf}> 
            <div className={airb.textAirBlock1}>
                <p className={airb.textAir}>{category}</p>
                </div>
                <div className={airb.textAirBlock2}>
                <p className={airb.textAir}>Цена: {price}</p>
                </div>
            <div className= {airb.but}>
                <button  onClick={onAddAirs} className={airb.butItem}> <span className={airb.plus1}>+ Добавить</span>  <i className={airb.curtItems}>{addedAirs}</i><span className={airb.plus}><i class="fas fa-plus"></i></span></button>
            </div>
            </div>
        </div>
    )
}
Machine.propTypes = {
    category: PropTypes.string,
    price: PropTypes.number,
    imageUrl:PropTypes.string,
    addedAirs: PropTypes.number
};
Machine.defaultProps = {
    category: '---',
    price: 0,
    imageUrl:"",
}
export default Machine
