import { LOGOUT, LOGIN } from '../actions'

//default ����ʡ���������Ϊ��������ʱ
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

