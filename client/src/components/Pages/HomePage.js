import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from '../Parts/Header'
import Posts from '../Parts/Posts'
import SideBar from '../Parts/SideBar'

const HomePage = props => {
    const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async()=>{
      const res = await axios.get('/post')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
    return(
        <>
            <Header />
            <div style={{display: 'flex'}}>
              <Posts posts={posts}/>
              <SideBar />
            </div>
        </>
    )
}

export default HomePage