import { selectShopData } from '../redux/shop/shop.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Product from '../Components/product/Product'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/shop/shop.utils'
import Spinner from '../Components/spinner/Spinner'

function ShopPage({ collection }) {
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getProducts())
  }, [dispatch])
  return collection ? (
    <div className="container">
      <div className="row row-cols-lg-4 row-cols-md-3 g-2 g-lg-3">
        {collection.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  )
}
const mapStateToProps = createStructuredSelector({
  collection: selectShopData,
})
export default connect(mapStateToProps)(ShopPage)
