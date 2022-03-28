import React from 'react'
import {connect} from 'react-redux';
import propTypes from 'prop-types';



 const Alert = ({alerts}) => {
  return (
alerts.length > 0 && (
  alerts.map(alert => (<div key={alert.id} className={`alert alert-${alert.type}`}>
  <i className='fa fa-info-circle'/>  {alert.msg}
    </div>)) )
  )
}

Alert.propTypes= {
  alerts: propTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alerts
})



export default connect(mapStateToProps,null) (Alert)



