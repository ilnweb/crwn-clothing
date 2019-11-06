import React from 'react';
import CustomButton from '../custom-button/custom-button.cmp';
import CartItem from '../cart-item/cart-item.cmp';
import { connect } from 'react-redux';

import './cart-dropdown.scss';

import { selectCardItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
     { cartItems.map( cartItem => (
       <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems:selectCardItems(state)
});

export default connect(mapStateToProps)(CartDropdown);