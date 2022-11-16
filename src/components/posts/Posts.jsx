import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/Posts-action'
// import { getTimelinePosts } from '../../api/Posts-Requests'
import { PostsData } from '../../data/PostsData'
import Post from '../post/Post'

import './styles.css'

const Posts = () => {
  const { user } = useSelector(state => state.authReducer.authData)
  const { posts, loading } = useSelector(state => state.postReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  return (
    <div className='Posts'>
      {loading
        ? 'Fetcjing Posts...'
        : posts.map((post, id) => {
            return <Post key={post._id} data={post} id={id} />
          })}
    </div>
  )
}

export default Posts
