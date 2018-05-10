import * as types from '../types'

export const login = (username, password) => {
    return {
        type: types.LOGIN,
        username: username,
        password: password
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}

export const initUserState = () => {
    return {
        type: types.INIT_USER_STATE
    }
}
