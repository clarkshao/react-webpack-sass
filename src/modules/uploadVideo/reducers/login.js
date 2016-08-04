import { LOGOUT, LOGIN } from '../actions'

//[ default ] is necessary when imported as a whole
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

