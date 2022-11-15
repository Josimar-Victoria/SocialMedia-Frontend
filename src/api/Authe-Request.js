import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// Login
export const logIn = formData => API.post('/auth/login', formData)

// Register
export const signUp = formData => API.post('/auth/register', formData)
