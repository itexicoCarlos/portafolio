import React from 'react'
// Styles
import injectSheet from 'react-jss'
import ovni from '../../shared/media/i-want-to-belive.jpg'
import stars from '../../shared/media/stars.png'
import { homeStyles } from './_home'

// TODO  miau cat para carga

const Home = ({classes}) => {
  return(
      <div style={{backgroundImage: `url(${stars})`}} className={classes.containerHome}>
        {/* <video className={classes.video} src={video} id='banana' muted loop /> */}
        <img className={classes.imgOvni} src={ovni} alt="ovni i want to belive"/>
      </div>
  )
}

const HomeWithStyles = injectSheet(homeStyles)(Home)
export default HomeWithStyles
