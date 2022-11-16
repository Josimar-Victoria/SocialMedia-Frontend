import React, { useState } from 'react'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import './styles.css'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/Posts-Requests'

const Post = ({ data }) => {
  const { user } = useSelector(state => state.authReducer.authData)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    setLiked(e => !e)
    likePost(data._id, user._id)
    liked ? setLikes(e => e - 1) : setLikes(e => e + 1)
  }

  console.log({ data })
  return (
    <div className='Post'>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ''}
        alt=''
      />

      <div className='postReact'>
        <img
          src={liked ? Heart : NotLike}
          alt=''
          style={{ cursor: 'pointer' }}
          onClick={handleLike}
        />
        <img src={Comment} alt='' />
        <img src={Share} alt='' />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className='detail'>
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
