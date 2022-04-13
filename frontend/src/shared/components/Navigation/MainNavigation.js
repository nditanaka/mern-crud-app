import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import './MainNavigation.css'
import NavLinks from './NavLinks'
import MainHeader from './MainHeader'

const MainNavigation = props => {
  return (
      <MainHeader>
          <button className='main-navigation__menu-btn'>
              <span />
              <span />
              <span />
          </button>
          <h1 className='main-navigation__title'>
              <Link to='/'>Your Places</Link>
          </h1>
          <nav>
              <NavLinks />
          </nav>
    </MainHeader>
  )
}

// MainNavigation.propTypes = {}

export default MainNavigation