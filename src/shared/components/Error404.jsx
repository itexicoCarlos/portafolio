import React from 'react'
// Styles
import injectSheet from 'react-jss'

const styles =  them => ({
  continerError404: {
    height: '100%',
    width: '100%',
    backgroundColor: 'silver'
  }
})

const Error404 = ({classes}) => {
  return(
    <div className={classes.continerError404}>404</div>
  )
}
const Error404Styles = injectSheet(styles)(Error404)
export default Error404Styles