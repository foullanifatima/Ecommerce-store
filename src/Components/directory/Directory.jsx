import './directory.scss'
import { connect } from 'react-redux'

import MenuItem from '../menu-item/MenuItem'
function Directory({ section }) {
  return (
    <div>
      <div className=" w-100">
        <div className="row gx-0">
          {section.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  section: state.directory,
})

export default connect(mapStateToProps)(Directory)
