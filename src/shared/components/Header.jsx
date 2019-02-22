import React from 'react'
import { Link } from 'react-router-dom'
// Styles library
import injectSheet from 'react-jss'
import classNames from 'classnames'
// Styles components and media
import img from '../media/js-logo.png'
import { headerStyles } from '../styles/components/_header'

const Header = ({classes}) => {
  // ! Combine classes  
  let mainHeaderContainer = classNames(
    classes.lContainer,
    classes.mainHeaderBlock
  )
// ${classes.mainHeaderBlock} ${classes.lContainer}
  return (
    <header className={classes.containerHeader}>
      <div className={mainHeaderContainer}>
        <Link to='/'>
          <img className={classes.mainLogo} src={img} alt="Logo NoobJs"/>
        </Link>
        <nav>
          <ul>
            <li><Link to='/login'>Inicio de sesion</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
const HeaderStyles = injectSheet(headerStyles)(Header)
export default HeaderStyles