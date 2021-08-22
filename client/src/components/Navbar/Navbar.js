import PagesList from './PagesList'
import SocialLinks from './SocialLinks'
import Login from './Login'


import classes from './Navbar.module.css'

const Navbar = props => {
    return (
        <nav className={classes['nav-body']}>
            <SocialLinks />
            <PagesList />
            <Login />
            {/* <ProfileImg /> */}
        </nav>
    )
}

export default Navbar