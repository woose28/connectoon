import React from 'react';
import { connect } from 'react-redux';
import Register from './register';

import { register_info_before, register_info_waiting, register_info_success, register_info_failure, requestRegister } from '../store/modules/register_info';

const RegisterContainer = (props) => {
    const handleOnClick = (username, link, email, base64) => {
        props.requestRegister(username, link, email, base64).then((result)=>{
            if(result === "success"){
                alert("등록 성공");
                window.location = "/";
            }
            else{
                alert("실패");
            }
            props.register_info_before();
        });
    }
    
    return (
        <Register
            isRegistering={props.isRegistering}
            isSuccess={props.isSuccess}
            handleRegister={handleOnClick}
        />
    )
}

const mapStateToProps = (state) => ({
    isRegistering: state.register_info.isRegistering,
    isSuccess: state.register_info.isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
    register_info_before: () => { dispatch(register_info_before()) },
    register_info_waiting: () => { dispatch(register_info_waiting()) },
    register_info_success: () => { dispatch(register_info_success()) },
    register_info_failure: () => { dispatch(register_info_failure()) },
    requestRegister: (username, link, email, base64) => { 
        return dispatch(requestRegister(username, link, email, base64))
     },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
