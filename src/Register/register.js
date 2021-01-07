import React, { useState } from 'react';

import './register.css';

const Register = (props) => {
    const [ username, setUsername ] = useState("");
    const [ link, setLink ] = useState("");
    const [ email, setEmail ] = useState("");
    //const [ imgFile, setImgFile ] = useState();
    const [ imgData, setImgData ] = useState();
    const [ isTpyedUsername, setIsTypedUsername ] = useState(false);
    const [ isTypedLink, setIsTypedLink ] = useState(false);
    const [ isTypedEmail, setIsTypedEmail ] = useState(false);
    const [ isFileloaded, setIsFileLoaded ] = useState(false);

    const [ blurUsername, setBlurUsername ] = useState(true);
    const [ isCorrectLink, setIsCorrectLink ] = useState(true);
    
    const information_guidance = "[개인정보활용 수집, 이용 안내]\n수입항목: 이메일주소\n수집목적: 광고주의 광고 및 협찬 요청을 작가에게 전달하기 위함\n보유, 활용기간: 사이트에 등록되어있는 동안, 소유자가 원할시 언제든지 파기\n\n    - 이메일주소는 광고주의 광고 및 협찬 요청을 이메일 소유주에게 전달하기 위해 수집하며, 광고주에게 직접 노출되는 것은 아닙니다.\n    - 신청자는 개인정보 수집에 대하여 거부할 권리를 가지고 있으며, 제공에 동의하지 않을 경우 등록이 불가함을 안내해드립니다."
    const placeholder_username = "인스타 계정 이름을 입력해주세요.";
    const placeholder_link = "인스타 계정 링크를 입력해주세요.";
    const placeholder_email = "이메일을 입력해주세요.";

    const error_required = "*필수 정보입니다.";
    const error_link = "*인스타그램 주소를 입력해주세요.";

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length > 0){
            setIsTypedUsername(true);
        }
        else{
            setIsTypedUsername(false);
        }
    }

    const onBlurUsername = () => {
        if(isTpyedUsername){
            setBlurUsername(true);
        }
        else{
            setBlurUsername(false);
        }
    }

    const handleLink = (e) => {
        setLink(e.target.value);
        setIsCorrectLink(true);
        if(e.target.value.length > 0){
            setIsTypedLink(true);
        }
        else{
            setIsTypedLink(false);
        }
    }

    const checkLink = () => {
        const insta_url = "https://www.instagram.com/";
        return link.startsWith(insta_url);
    }

    const onBlurLink = () => {
        if(checkLink()){
            setIsCorrectLink(true);
        }
        else{
            setIsCorrectLink(false);
        }
    }

    const handleEmail = (e) => {
       setEmail(e.target.value);
       if(e.target.value.length > 0){
            setIsTypedEmail(true);
        }
        else{
            setIsTypedEmail(false);
        }
    }

    const handleImgFile = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImgData(reader.result);
            setIsFileLoaded(true)
        };

        reader.readAsDataURL(file);
    }
    const handleOnClick = () => {
        if(!isTpyedUsername) {
            alert("계정 이름을 입력해주세요.");
        }
        else if(!checkLink()){
            alert("인스타그램 주소를 입력해주세요.");
        }
        else if(!isTypedLink) {
            alert("링크를 입력해주세요.");
        }
        else if(!isFileloaded) {
            alert("대표 이미지 로드 전입니다.");
        }
        else {
            props.handleRegister(username, link, email, imgData);
        }
    }

    return(
        <div className="enroll-container">
            <div className="enroll-form">
                <div className="enroll-row enroll-row-first">
                    <div className="enroll-info">계정 이름</div>
                    <input className="enroll-row-input-text" type="text" onChange={handleUsername} placeholder={placeholder_username} onBlur={onBlurUsername} required/>
                </div>
                <div className="enroll-row">
                    <div className="enroll-info">{blurUsername ? undefined: " "}</div>
                    <div className="enroll-error">{blurUsername ? undefined: error_required}</div>
                </div>

                <div className="enroll-row enroll-row-others">
                    <div className="enroll-info">링크</div>
                    <input className="enroll-row-input-text" type="text" onChange={handleLink} placeholder={placeholder_link} onBlur={onBlurLink} required/>
                </div>
                <div className="enroll-row">
                    <div className="enroll-info">{isCorrectLink ? undefined: " "}</div>
                    <div className="enroll-error">{isCorrectLink ? undefined: error_link}</div>
                </div>

                <div className="enroll-row enroll-row-others">
                    <div className="enroll-info">이메일</div>
                    <input className="enroll-row-input-text" type="text" onChange={handleEmail} placeholder={placeholder_email} required/>
                </div>
                <div className="enroll-row enroll-row-others">
                    <div className="enroll-info">대표 이미지</div>
                    <input className="enroll-input-file" type="file" accept=".png, .jpg" onChange={handleImgFile} required/>
                </div>
                <div className="enroll-row-button">
                    <button onClick={handleOnClick} disabled={props.isRegistering}>등록하기</button>
                </div>
                <div className="enroll-information-guidance">
                    {information_guidance}
                </div>
            </div>
        </div>
    );
}

export default Register;


