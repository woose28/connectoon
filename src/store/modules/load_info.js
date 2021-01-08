import axios from 'axios';

const LOAD_INFO_BEFORE = "LOAD_INFO_BEFORE";
const LOAD_INFO_WAITING = "LOAD_INFO_WAITING";
const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS";
const LOAD_INFO_FAILURE = "LOAD_INFO_FAILURE";

// 액션 생성자
export const load_info_before = () => ({ type: LOAD_INFO_BEFORE });
export const load_info_waiting = () => ({ type: LOAD_INFO_WAITING });
export const load_info_success = (payload) => ({ type: LOAD_INFO_SUCCESS, payload });
export const load_info_failure = () => ({ type: LOAD_INFO_FAILURE });

// 통신 함수
const preprocessing_data = (data) => {
    let length = data.length;
    let final_id = data[length-1].id

    return {
        data,
        length,
        final_id,
    }
}

export function requestLoad() {

    return async (dispatch) => {
        dispatch(load_info_waiting);

        return axios.get("https://connectoon.co.kr/api/load_data/").then(
            (response) => {
                const payload = preprocessing_data(response.data.user_data);    
                dispatch(load_info_success(payload));
            }
        ).catch(
            (error) => {
                console.log(error);
                dispatch(load_info_failure());
            }
        )
    }
}

const initial_state = {
    isLoading: false,
    isSuccess: "before",
    info: {
        data: [],
        length: 0,
        final_id: 0,
    }
}

export default function load_info(state = initial_state, action){
    switch(action.type){
        case LOAD_INFO_BEFORE:
            return {
                ...state,
                isLoading: false,
                isSuccess: "before",
            }

        case LOAD_INFO_WAITING:
            return {
                ...state,
                isLoading: true,
                isSuccess: "waiting",
            }
        
        case LOAD_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: "success",
                info : {
                    ...state.info,
                    data: action.payload.data,
                    length: action.payload.length,
                    final_id: action.payload.final_id,
                }
            }

        case LOAD_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: "fail",
            }
            
        default:
            return state;
    }
}
