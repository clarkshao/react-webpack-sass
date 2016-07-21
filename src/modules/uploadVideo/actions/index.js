export const DID_LOGOUT_YOUTUBE = 'DID_LOGOUT_YOUTUBE'
export const DID_LOGIN_YOUTUBE = 'DID_LOGIN_YOUTUBE'

export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

export function loginYoutube() {
    return {
        type: LOGIN
    }
}

export function logoutYoutube() {
    return {
        type: LOGOUT
    }
}

export function handleClick(){
    return (dispatch, getState) => {
        if(getState().btnText == LOGOUT){
            dispatch(logoutYoutube())
        }
        else if(getState().btnText == LOGIN){
            dispatch(loginYoutube())
        }
    }
}

export function tryLoginYoutube() {
    return (dispatch, getState) => {


        dispatch(loginYoutube())
    }
}

export function tryLogoutYoutube(delay = 1000) {
    return (dispatch, getState) => {


        dispatch(logoutYoutube())
    }
}