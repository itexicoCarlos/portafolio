import React from 'react'
// Styles 
import injectSheet from 'react-jss'

const styles = ({
  containerApp: {
    height: 'calc(100% - 4rem)',
    width: '100%'
  }
})

const App = ({children, classes}) => {
  return (
    <div className={classes.containerApp}>
      { children }
    </div>
  )
}
const AppStyles = injectSheet(styles)(App)
export default AppStyles
