import {useContext} from 'react'
import {Context} from '../../context/Context'
import PagesList from './PagesList'
import SocialLinks from './SocialLinks'
import Login from './Login'
import Profile from './Profile'


import classes from './Navbar.module.css'

const Navbar = props => {
    const {user} = useContext(Context)
    return (
        <nav className={classes['nav-body']}>
            <SocialLinks />
            <PagesList />
            {!user && <Login />}
            {user && <Profile />}
        </nav>
    )
}

export default Navbar