import {useState, useEffect, useContext} from 'react'
import {Context} from '../../context/Context'
import axios from 'axios'

import Header from '../Parts/Header'
import Posts from '../Parts/Posts'
import SideBar from '../Parts/SideBar'

//STYLES
import classes from './HomePage.module.css'

const HomePage = props => {
    const [posts, setPosts] = useState([])
    const {dispatch} = useContext(Context)

  useEffect(() => {
    const fetchPosts = async()=>{
      dispatch({ type: 'SET_FETCHING'})
      const res = await axios.get('/post')
      setPosts(res.data)
      dispatch({ type: 'STOP_FETCHING'})
    }
    fetchPosts()
  }, [dispatch])
    return(
        <>
            <Header />
            <div className={classes.container}>
              <Posts posts={posts}/>
              <SideBar />
            </div>
        </>
    )
}

export default HomePage