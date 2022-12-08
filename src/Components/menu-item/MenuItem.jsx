import './menuItem.scss'
import { useNavigate } from 'react-router'

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate()
  return (
    <div
      className={`${size} menu-items col-lg-6`}
      onClick={() => {
        navigate(`/shop/${linkUrl}`)
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
