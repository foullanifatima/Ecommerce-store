import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import Product from '../Components/product/Product'
import { useDispatch } from 'react-redux'
import { getProductBycategory } from '../redux/shop/shop.utils'
import Spinner from '../Components/spinner/Spinner'

const CollectionPage = ({ itemsByCategory }) => {
  const urlCollection = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductBycategory(urlCollection.link))
  }, [dispatch])

  return (
    <div className="container">
      {itemsByCategory ? (
        <>
          <h1 className="title-collection">{itemsByCategory[0].title}</h1>
          <div className="  row row-cols-lg-4 row-cols-md-3 g-2 g-lg-3">
            {itemsByCategory.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </div>
        </>
      ) : (
        // adding a snipper loading here
        <Spinner />
      )}
    </div>
  )
}
const mapStateToProps = (state) => ({
  itemsByCategory: state.shopData.itemsByCategory,
})
export default connect(mapStateToProps)(CollectionPage)
