import { Link } from 'react-router-dom'
// import Logo from '../../assets/logo.png'
import Logo from '../../assets/logo.png'
import './header.scss'
import { auth } from '../../firebase/Firebase'
import { connect } from 'react-redux'
import { useState } from 'react'
import CartDropdown from '../cartDropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/user/user.selector'

import { CgShoppingBag } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
function Header({ currentUser, hidden, itemsCount }) {
  const [showsidebar, setShowSidebar] = useState(false)

  return (
    <header className="site-header">
      {/* bootstrap container class */}
      <div className="container">
        {/* navbar */}
        <nav className="site-header__navbar">
          {/* navbar logo & links */}
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              {/* navbar logo */}
              <Link to="/">
                <img src={Logo} alt="logo" className="fluid-img" />
              </Link>
            </div>
            {/* navbar links */}
            <ul
              className={`site-header__links ${
                showsidebar ? 'site-header__show-sidebar' : ''
              }`}
            >
              <li>
                <Link className="" to="/shop">
                  SHOP
                </Link>
              </li>
              <li>
                <Link className="" to="/shop">
                  CONTACT
                </Link>
              </li>
              {currentUser ? (
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    auth.signOut()
                  }}
                >
                  SIGNOUT
                </div>
              ) : (
                <Link className="" to="/signin">
                  SIGN IN
                </Link>
              )}
            </ul>
          </div>

          <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
                <CgShoppingBag
                  onClick={() => {
                    toggleCartHidden()
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <span className="site-header__cart-count">{itemsCount}</span>
              </li>
              <li className="site-header__icons-item">
                <FaBars
                  className="site-header__toggle"
                  onClick={() => {
                    setShowSidebar(!showsidebar)
                  }}
                />
              </li>
            </ul>
          </div>
        </nav>
        {hidden ? <></> : <CartDropdown />}
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: state.cart.hidden,
  itemsCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps)(Header)
