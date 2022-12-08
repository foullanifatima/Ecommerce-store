import React from 'react'
import Gallery from '../Components/gallery/Gallery'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetProductById } from '../redux/shop/shop.utils'
import { connect } from 'react-redux'
import CustomButton from '../Components/custom-button/CustomButton'
import { addItem } from '../redux/cart/cart.action'
import Stars from '../Components/star/Stars'
import Spinner from '../Components/spinner/Spinner'

const SingleProduct = ({ singleProduct }) => {
  const id = useParams().id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProductById(id))
  }, [id])

  return singleProduct ? (
    <section className="container">
      <div className="">
        <div className="row g-2 justify-content-between align-items-center w-100 h-100">
          <div className="col-md-6 col-lg-6 col-sm-12 ">
            <Gallery
              id={singleProduct.id}
              image={singleProduct.image}
              gallery={singleProduct.gallarey}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 pt-5">
            <div className="singleProduct">
              <h3 className="singleProduct__title">{singleProduct.name}</h3>
              <p className="singleProduct__brand">
                <span className="singleProduct__brand--span">BRAND:</span>{' '}
                {singleProduct.brand}
              </p>
              <h4 className="singleProduct__price">{singleProduct.price} $</h4>
              <div>
                <Stars stars={singleProduct.stars} />
              </div>
              <p className="singleProduct__desc">{singleProduct.desription}</p>
            </div>
            <CustomButton
              onClick={() => {
                addItem(singleProduct)
              }}
              type="button"
            >
              Add To Cart
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}
const mapStateToProps = (state) => ({
  singleProduct: state.shopData.singleProduct,
})

export default connect(mapStateToProps)(SingleProduct)
