import React, {useState} from 'react'
import { Link } from 'react-router-dom'


import './MainNavigation.css'
import NavLinks from './NavLinks'
import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'


const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }
    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
            {drawerIsOpen ? (<SideDrawer>
            <nav className='main-navigation__drawer-nav'>
                <NavLinks />
                </nav>
            </SideDrawer>) : null}
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
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

export default MainNavigation