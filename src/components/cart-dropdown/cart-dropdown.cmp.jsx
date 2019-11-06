import React from 'react';
import CustomButton from '../custom-button/custom-button.cmp';
import CartItem from '../cart-item/cart-item.cmp';
import { connect } from 'react-redux';

import './cart-dropdown.scss';

import { selectCardItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )))
          :
          (<span className="empty-message">Your card is empty</span>)
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }} >GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems:selectCardItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));