import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as VisibilityActionCreators from './VisibilityActions'

const VisibilityFilterLink = ({ active, children, onClick }) => (
  <button className={"btn btn-lg btn-primary"}
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

VisibilityFilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityfilter
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(VisibilityActionCreators.setVisibilityFilter(ownProps.filter))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilterLink)
