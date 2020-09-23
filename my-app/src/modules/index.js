import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { history } from '../shared/store'
import counter from './counter'

export default combineReducers({
    counter
})