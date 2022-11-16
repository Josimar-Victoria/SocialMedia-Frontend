import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../actions/Posts-action'
// import { getTimelinePosts } from '../../api/Posts-Requests'
import { PostsData } from '../../data/PostsData'
import Post from '../post/Post'

import './styles.css'

const Posts = () => {
  const { user } = useSelector(state => state.authReducer.authData)
  let { posts, loading } = useSelector(state => state.postReducer)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [dispatch, user._id])

  if (!posts) return 'No posts'

  if (params.id) posts = posts.filter(post => post.userId === params.id)

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
