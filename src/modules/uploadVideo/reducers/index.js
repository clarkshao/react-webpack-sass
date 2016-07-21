import { combineReducers } from 'redux'
import handleSigninBtn from './login'

const rootReducer = combineReducers({
    btnText : handleSigninBtn
})

export default rootReducer