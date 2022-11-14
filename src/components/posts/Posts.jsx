import React from 'react'
import { PostsData } from '../../data/PostsData'
import Post from '../post/Post'

import './styles.css'

const Posts = () => {
  return (
    <div className='Posts'>
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />
      })}
    </div>
  )
}

export default Posts
