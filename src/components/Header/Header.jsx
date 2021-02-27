import React from 'react';
import h from './Header.module.css';
import Logo from './../../asseds/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
const Header = (props) => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));
  return (
    <div className={h.head}>
      <img
        className={h.logo}
        src={Logo}
        alt="https://webstockreview.net/images/air-clipart-breeze-7.jpg"
      />
      <p className={h.p}>breeze-crimea</p>
      <div className={h.information}>
        <p>продажа, обслуживание, установка кондиционеров.</p>
      </div>
      <div className={h.city}>
        <p>г.Симферополь</p>
      </div>
      <div className={h.basketWrap}>
        <NavLink to="/basket" className={h.onlyCart}>
          <div >
            <span className={h.price}>{totalPrice} <i className="fas fa-ruble-sign"></i></span>
            <span className={h.count}>{totalCount} <i className="fas fa-shopping-cart"></i></span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
Header.propTypes={
  totalPrice: PropTypes.number,
}
Header.defaultProps={
  totalPrice:0,
}
export default Header;
