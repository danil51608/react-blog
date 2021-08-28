import classes from './Header.module.css'

const Header = props => {
    return( 
        <div className={classes.container}>
            <div className={classes.names}>
                <span className={classes.myName}>Danil Yusupov</span><br/>
                <span className={classes.appName}>React Blog</span>
            </div>
        </div>
    )
}

export default Header