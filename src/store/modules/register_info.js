import axios from 'axios';

const REGISTER_INFO_BEFORE = "REGISTER_INFO_BEFORE";
const REGISTER_INFO_WAITING = "REGISTER_INFO_WAITING";
const REGISTER_INFO_SUCCESS = "REGISTER_INFO_SUCCESS";
const REGISTER_INFO_FAILURE = "REGISTER_INFO_FAILURE";

export const register_info_before = () => ({ type: REGISTER_INFO_BEFORE });
export const register_info_waiting = () => ({ type: REGISTER_INFO_WAITING });
export const register_info_success = () => ({ type: REGISTER_INFO_SUCCESS });
export const register_info_failure = () => ({ type: REGISTER_INFO_FAILURE });

//axios
export function requestRegister(username, link, email, base64) {
    const user_info = {
        username,
        link,
        email,
        base64,
    }
    return (dispatch) => {
        dispatch(register_info_waiting());
        
        return axios.post("http://54.180.115.78:8000/register/", { user_info: user_info }).then(
            (response) => {
                dispatch(register_info_success());
                return "success";
            }
        ).catch(
            (error) => {
                dispatch(register_info_failure());
                return "fail"
            }
        )
    }
}

const initial_state = {
    isRegistering: false,
    isSuccess: "before",
}

export default function register_info(state = initial_state, action){
    switch(action.type){
        case REGISTER_INFO_BEFORE: 
            return {
                ...state,
                isRegistering: false,
                isSuccess: "before",
            }

        case REGISTER_INFO_WAITING:
            return {
                ...state,
                isRegistering: true,
                isSuccess: "waiting",
            }

        case REGISTER_INFO_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isSuccess: "success",
            }

        case REGISTER_INFO_FAILURE:
            return {
                ...state,
                isRegistering: false,
                isSuccess: "fail",
            }
            
        default:
            return state;
    }
}
