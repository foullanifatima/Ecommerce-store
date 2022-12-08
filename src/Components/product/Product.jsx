import './product.scss'
import { Link } from 'react-router-dom'
import { addItem } from '../../redux/cart/cart.action'

import BuyIcon from '../../assets/buy-icon.png'
import Stars from '../star/Stars'
function Product({ product }) {
  return (
    <div className="p-2">
      <div className="product  col">
        <Link to={`/products/${product.id}`}>
          <div className="product__image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product__image"
            />
          </div>
        </Link>
        <div className="product__footer">
          <div className="product__footer-heading">
            <Link to={`/products/${product.id}`}>
              <h3 className="product__footer-title">{product.name}</h3>
            </Link>
            <span className="buy-icon">
              <img
                src={BuyIcon}
                alt="add to cart"
                onClick={() => {
                  addItem(product)
                }}
              />
            </span>
          </div>
          <div className="product__footer-prices">
            <span>
              <span className="product__footer-price">{product.price}$</span>
              <span className="product__footer-price--old">
                {product.oldPrice}$
              </span>
            </span>
            {/* stars component */}
            <div>
              <Stars stars={product.stars} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
