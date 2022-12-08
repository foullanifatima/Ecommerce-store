import HomePage from './Pages/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import ShopPage from './Pages/ShopPage'
import Header from './Components/header/Header'
import SignIn_SignUp from './Pages/SignIn_SignUp'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, createUserProfileDocument } from './firebase/Firebase'
import { setCurrentUser } from './redux/user/user.action'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector'
import CheckOut from './Pages/CheckOut'
import CollectionPage from './Pages/CollectionPage'

import SingleProduct from './Pages/SingleProduct'

function App({ currentUser }) {
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          createUserProfileDocument(user)
          // dispatch user
          setCurrentUser(user)

          // getting Shop data from firebase
        } else {
          // User is signed out
          setCurrentUser(null)
        }
      },
      []
    )
  }, [])

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop/:link" element={<CollectionPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignIn_SignUp />}
        />
      </Routes>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
})

export default connect(mapStateToProps)(App)
