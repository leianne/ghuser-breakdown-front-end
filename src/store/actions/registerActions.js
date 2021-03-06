import axios from 'axios';

const url = 'https://peaceful-fjord-80447.herokuapp.com/'

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = userInfo => dispatch => {
    dispatch({type: REGISTER_USER_START})
        axios.post(`${url}api/auth/register`, userInfo)
            .then(res => {
                dispatch({
                    type: REGISTER_USER_SUCCESS, 
                    payload: res.data
                })
                window.location.href = '/'
            })
            .catch(err => console.log(err))
}