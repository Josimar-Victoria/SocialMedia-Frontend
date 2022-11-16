import { combineReducers } from 'redux'

import authReducer from './auth-reducer'
import postReducer from './post-reducer'

export const reducers = combineReducers({ authReducer, postReducer })
