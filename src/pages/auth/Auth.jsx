import { isFocusable } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import { logIn, signUp } from '../../actions/Auth-action'

const Auth = () => {
  const initialState = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmpass: ''
  }
  const loading = useSelector(state => state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState(initialState)
  const [confirmPass, setConfirmPass] = useState(true)

  console.log(loading)
  const dispatch = useDispatch()

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false)
    } else {
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setConfirmPass(true)
    setData({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmpass: ''
    })
  }

  return (
    <div className='Auth'>
      {/* Left Side */}
      <div className='a-left'>
        <img src={Logo} alt='' />
        <div className='Webname'>
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className='a-right' onSubmit={handleSubmit}>
        <form className='infoForm authForm'>
          <h3>{isSignUp ? 'Register' : 'Login'}</h3>

          {isSignUp && (
            <div>
              <input
                type='text'
                placeholder='First Name'
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type='text'
                placeholder='Last Name'
                className='infoInput'
                name='lastname'
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type='text'
              className='infoInput'
              name='username'
              placeholder='Usernames'
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type='password'
              className='infoInput'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type='password'
                className='infoInput'
                name='confirmpass'
                placeholder='Confirm Password'
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              color: 'red',
              fontSize: '12px',
              alignSelf: 'flex-end',
              marginRight: '5px',
              display: confirmPass ? 'none' : 'block'
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              onClick={() => setIsSignUp(e => !e, resetForm())}
              style={{ cursor: 'pointer', fontSize: '12px' }}
            >
              {isSignUp
                ? 'Already have an account Login'
                : "Don't have an account Sign up"}
            </span>
          </div>
          <button className='button infoButton' type='submit' disabled={loading}>
            {loading ? 'Loading...' : isSignUp ? 'Register' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

// function LogIn () {
//   return (
//     <div className='a-right'>
//       <form className='infoForm authForm'>
//         <h3>Log In</h3>

//         <div>
//           <input
//             type='text'
//             placeholder='Username'
//             className='infoInput'
//             name='username'
//           />
//         </div>

//         <div>
//           <input
//             type='password'
//             className='infoInput'
//             placeholder='Password'
//             name='password'
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: '12px' }}>
//             Don't have an account Sign up
//           </span>
//           <button className='button infoButton'>Login</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// function SignUp () {
//   return (
//     <div className='a-right'>
//     <form className='infoForm authForm'>
//       <h3>Sign up</h3>

//       <div>
//         <input
//           type='text'
//           placeholder='First Name'
//           className='infoInput'
//           name='firstname'
//         />
//         <input
//           type='text'
//           placeholder='Last Name'
//           className='infoInput'
//           name='lastname'
//         />
//       </div>

//       <div>
//         <input
//           type='text'
//           className='infoInput'
//           name='username'
//           placeholder='Usernames'
//         />
//       </div>

//       <div>
//         <input
//           type='text'
//           className='infoInput'
//           name='password'
//           placeholder='Password'
//         />
//         <input
//           type='text'
//           className='infoInput'
//           name='confirmpass'
//           placeholder='Confirm Password'
//         />
//       </div>

//       <div>
//         <span style={{ fontSize: '12px' }}>
//           Already have an account. Login!
//         </span>
//       </div>
//       <button className='button infoButton' type='submit'>
//         Signup
//       </button>
//     </form>
//   </div>
//   )
// }

export default Auth
