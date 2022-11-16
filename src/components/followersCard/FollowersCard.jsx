import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/User.Request'
import { Followers } from '../../data/FollowersData'
import User from '../user/User'
import './styles.css'

const FollowersCard = () => {
  const [persons, setPersons] = useState([])
  const { user } = useSelector(state => state.authReducer.authData)
  console.log(persons)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser()
      setPersons(data)
    }

    fetchPersons()
  }, [])
  return (
    <div className='FollowersCard'>
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />
        }
      })}
    </div>
  )
}

export default FollowersCard
