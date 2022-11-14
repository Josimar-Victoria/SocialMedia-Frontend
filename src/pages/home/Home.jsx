import React from 'react'
import { PostSide, ProfileSide, RightSide } from '../../components'
import './styles.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='profileSide'>
        <ProfileSide />
      </div>
      <div className='postSide'>
        <PostSide />
      </div>
      <div className='rightSide'>
        <RightSide />
      </div>
    </div>
  )
}

export default Home
