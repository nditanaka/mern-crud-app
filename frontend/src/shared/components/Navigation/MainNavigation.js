import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import './MainNavigation.css'
import NavLinks from './NavLinks'
import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'

const MainNavigation = (props) => {
    return (
        <>
            <SideDrawer>
            <nav className='main-navigation__drawer-nav'>
                <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn'>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
  )
}

// MainNavigation.propTypes = {}

export default MainNavigation