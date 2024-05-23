import '../../style/SignUp.css';
import React, { useState, useEffect, memo, useCallback } from 'react';
import CommonSectionContainer from './CommonSectionContainer';
import UserInput from '../../Components/Login/UserInput';
import UserInputMsg from '../../Components/Login/UserInputMsg';
import UserSignUpCheckBox from '../../Components/Login/UserSignUpCheckBox';
import Modal from '../../Components/Login/Modal';
import { useUser } from '../../Context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../../utils/useUserInfo';

const URL = 'http://localhost:4000/회원가입API';

const EmailSignUpContainer = () => {
    const { user, updateUserInfo, deleteUserInfo } = useUser();
    const nav = useNavigate();
    const option = {
        method: 'post',
        url: URL,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // useState 상태관리
    const [signUpState, setSignUpState] = useState(false); // api를 통해 오는 상태값
    const [checkModal, setCheckModal] = useState(false); // 모달 상태관리

    // http api 통신
    const signUp = async (sendData) => {
        return axios(option, {
            data: sendData,
        })
            .then((res) => {
                // 2.중복된이메일(duplEmail)-> 모달 ,
                // 3.가입가능(success)-> 이메일인증페이지로 이동

                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // 가입 버튼
    const onSubmitButton = async (e) => {
        e.preventDefault(); // Form의 기본 이벤트를 차단

        const allValuesTrue = Object.values(validationResults).every((value) => value === true);
        const sendData = {
            email: userInfo.email,
            name: userInfo.name,
            password: userInfo.password,
            phoneNumber: user.phoneNumber,
        };
        if (allValuesTrue && allChecked) {
            // setSignUpState(await signUp(sendData))
            // const result = signUp(sendData) // 요청 보내는 부분

            const result = 'success';
            setSignUpState(result);
            switch (result) {
                case 'exist':
                    nav('/login/existing-account');
                    break;
                case 'duplEmail':
                    setCheckModal(true);
                    break;
                case 'success':
                    updateUserInfo('email', sendData.email);
                    updateUserInfo('name', sendData.name);
                    updateUserInfo('password', sendData.password);
                    /**
                     *  axios를 통해 호출
                     *  이 부분에서 이메일 인증 api 호출
                     *  */
                    nav('/login/email-auth');
                    break;
                default:
                    setCheckModal(false);
                    break;
            }
            // console.log('1')
        } else {
            setSignUpState('fail');
            setCheckModal(true);
        }
    };
    // 모달창 닫기위한 함수
    const closeModal = () => {
        setCheckModal(false);
    };

    // 입력 정보 정규식 검사
    const { userInfo, validationResults, handleInputChange } = useUserInfo();

    // 체크박스 상태관리
    const [options, setOptions] = useState([
        { label: '[필수] 만 14세 이상', isChecked: false },
        { label: '[필수] P&J 이용약관', isChecked: false },
        { label: '[필수] 개인정보 수집 및 이용', isChecked: false },
    ]);
    const [allChecked, setAllChecked] = useState(false);

    useEffect(() => {
        const allChecked = options.every((option) => option.isChecked);
        setAllChecked(allChecked);
    }, [options]);

    const handleCheckBoxChange = useCallback(
        (e, index) => {
            if (typeof index === 'number') {
                const newOptions = [...options];
                newOptions[index].isChecked = e.target.checked;
                setOptions(newOptions);
            } else {
                setAllChecked(e.target.checked);
                setOptions(options.map((option) => ({ ...option, isChecked: e.target.checked })));
            }
        },
        [options]
    );

    return (
        <>
            <CommonSectionContainer text={'이메일로 시작하기'}>
                <div className="w-full">
                    <form className="mt-[40px] mb-[40px] grid grid-cols-1 gap-y-[24px]" data-gtm-form-interact-id="0">
                        <div>
                            <p className="content_primary font_label_bold_md mb-[8px]">이메일 (아이디)</p>
                            <UserInput
                                name="email"
                                placeholder="example@gmail.com"
                                type="text"
                                value={userInfo.email}
                                handleInputChange={handleInputChange}
                                isValid={validationResults.emailValid}
                            />
                            <UserInputMsg
                                isValid={validationResults.emailValid}
                                text={'올바른 이메일 형식이 아닙니다.'}
                            />
                        </div>

                        <div>
                            <p className="content_primary font_label_bold_md mb-[8px]">이용자 이름</p>
                            <UserInput
                                name="name"
                                placeholder="이용자 이름 입력"
                                type="text"
                                value={userInfo.name}
                                handleInputChange={handleInputChange}
                                isValid={validationResults.nameValid}
                            />
                            <UserInputMsg isValid={validationResults.nameValid} text={'올바른 이름을 입력해주세요.'} />
                        </div>
                        <div>
                            <p className="content_primary font_label_bold_md mb-[8px]">비밀번호</p>
                            <UserInput
                                name="password"
                                placeholder="비밀번호 입력"
                                type="password"
                                value={userInfo.password}
                                handleInputChange={handleInputChange}
                                isValid={validationResults.passwordValid}
                            />
                            <UserInputMsg
                                isValid={validationResults.passwordValid}
                                text={'비밀번호는 8자 이상 특수문자 1개 이상 입력해주세요.'}
                            />
                        </div>

                        <div>
                            <p className="content_primary font_label_bold_md mb-[8px]">비밀번호 확인</p>
                            <UserInput
                                name="passwordCheck"
                                placeholder="비밀번호 입력"
                                type="password"
                                value={userInfo.passwordCheck}
                                handleInputChange={handleInputChange}
                                isValid={validationResults.passwordMatch}
                            />
                            <UserInputMsg
                                isValid={validationResults.passwordMatch}
                                userInfo={userInfo}
                                text={'비밀번호와 일치하지 않습니다.'}
                            />
                        </div>

                        {/* 체크박스 시작 부분 */}
                        <UserSignUpCheckBox options={options} allChecked={allChecked} onChange={handleCheckBoxChange} />

                        <button
                            onClick={onSubmitButton}
                            // aria-label="button"
                            type="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                        >
                            시작하기
                        </button>
                    </form>
                </div>
            </CommonSectionContainer>
            {checkModal && <Modal type={signUpState} modalState={checkModal} closeModal={closeModal} />}
        </>
    );
};

export default memo(EmailSignUpContainer);
