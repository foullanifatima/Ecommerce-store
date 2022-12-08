import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cart.action'
import './checkout.scss'

const CheckOutItem = ({ cartItem }) => {
  const { id, name, image, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem
