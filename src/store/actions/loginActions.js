import axios from 'axios';
const baseURL = process.env.BACKEND_API || 'http://localhost:5000/api/auth'

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = userInfo => dispatch => {
    dispatch({type: LOGIN_USER_START})
        axios.post(`${baseURL}/login`, userInfo)
            .then(res => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: res.data
                })
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: LOGIN_USER_FAILURE,
                    payload: err
                })
            })
    }