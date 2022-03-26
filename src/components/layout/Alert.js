import React from 'react'
import {connect} from 'react-redux';
import propTypes from 'prop-types';



 const Alert = ({alerts}) => {
  return (
alerts.length > 0 && 
  alert.map(alert => (<div key={alert.id} className={`alert alert-${alert.type}`}> {alert.msg}</div>))
  )
}

Alert.propTypes= {
  alerts: propTypes.arr.isRequired
}

const mapStateToProps = state = ({
  alerts: state
})



export default connect(mapStateToProps,null) (Alert)



