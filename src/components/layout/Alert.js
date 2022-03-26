import React from 'react'
import {connect} from 'react-redux'



 const Alert = () => {
  return (

    <div className={`alert alert-${alert.type}`}> {alert.msg}</div>
  )
}



export default connect(mapStateToProps,null) (Alert)



