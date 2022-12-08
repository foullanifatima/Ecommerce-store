import CheckOutItem from '../Components/checkout-item/CheckOutItem'
import { connect } from 'react-redux'

import {
  selectCartItems,
  selectCartItemsTotal,
} from '../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
})
export default connect(mapStateToProps)(CheckOut)
