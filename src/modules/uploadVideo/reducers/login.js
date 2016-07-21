import { LOGOUT, LOGIN } from '../actions'

//default 不能省，如果是作为整体引用时
export default function handleSigninBtn(state = LOGIN, action = {}) {
    switch (action.type) {
        case LOGOUT:
            return LOGIN
        case LOGIN:
            return LOGOUT
        default:
            return state
    }
}

