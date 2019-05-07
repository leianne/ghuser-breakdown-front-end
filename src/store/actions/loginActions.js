import axios from 'axios';
const baseURL = 'https://peaceful-fjord-80447.herokuapp.com/';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = userInfo => dispatch => {
    dispatch({type: LOGIN_USER_START})
        axios.post(`${baseURL}api/auth/login`, userInfo)
            .then(res => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: res.data
                })
                window.location.href = '/'
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_USER_FAILURE,
                    payload: err
                })
            })
    }