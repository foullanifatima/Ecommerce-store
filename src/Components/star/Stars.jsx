import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './stars.scss'

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span className="stars" key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return <div>{tempStars}</div>
}

export default Stars
