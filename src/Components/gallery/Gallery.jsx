import Slider from 'react-slick'
import './gallery.scss'

function Gallery({ gallery }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
  }
  return (
    <Slider {...settings}>
      {gallery &&
        gallery.map((image) => {
          return (
            <div className="gallery" key={image.sku}>
              <img
                className=" img-fluid m-auto h-100 "
                src={image.url}
                alt={image.sku}
              />
            </div>
          )
        })}
    </Slider>
  )
}

export default Gallery
