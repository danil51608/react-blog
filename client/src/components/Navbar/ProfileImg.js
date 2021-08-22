import profileImg from '../../assets/imgs/profile.jpeg'
import classes from './ProfileImg.module.css'

const ProfileImg = props => {
    return (
        <div className={classes['img-container']}>
            <img src={profileImg} alt='profile'/>
        </div>
    )
}

export default ProfileImg