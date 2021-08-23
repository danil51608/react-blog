import {Link} from 'react-router-dom'

import classes from './PagesList.module.css'


const PagesList = props => {
    return(
        <ul className={classes['list-body']}>
            <li><Link to='/'>HOME</Link></li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>WRITE</li>
            {/* <li>LOGOUT</li> */}
        </ul>
    )
}

export default PagesList