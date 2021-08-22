import classes from './SocialLinks.module.css'
import fbIcon from '../../assets/imgs/icons/facebook.png'
import instIcon from '../../assets/imgs/icons/inst.png'
import vkIcon from '../../assets/imgs/icons/vk.png'
import twitIcon from '../../assets/imgs/icons/twitter.png'

const SocialLinks = props => {
    return(
        <ul className={classes['links-container']}>
            <li>
                <div className={classes['icon-container']}>
                    <img src={fbIcon} alt="Facebook"></img>
                </div>
            </li>
            <li>
                <div className={classes['icon-container']}>
                    <img src={instIcon} alt="Instagram"></img>
                </div>
            </li>
            <li>
                <div className={classes['icon-container']}>
                    <img src={vkIcon} alt="VK"></img>
                </div>
            </li>
            <li>
                <div className={classes['icon-container']}>
                    <img src={twitIcon} alt="Twitter"></img>
                </div>
            </li>
        </ul>
    )
}

export default SocialLinks