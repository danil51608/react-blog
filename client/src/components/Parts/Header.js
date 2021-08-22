import classes from './Header.module.css'

import headerImg from '../../assets/imgs/freedom.jpg'

const Header = props => {
    return( 
        <div className={classes.container}>
            <div className={classes.names}>
                <span className={classes.myName}>Danil Yusupov</span><br/>
                <span className={classes.appName}>React Blog</span>
            </div>
            <div className={classes.imgContainer}>
                <img src={headerImg} alt={'Danil Yusupov'}/>
            </div>
        </div>
    )
}

export default Header