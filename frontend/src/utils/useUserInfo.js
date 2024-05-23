import { useState, useEffect, useCallback } from 'react';

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        name: '',
        password: '',
        passwordCheck: '',
    });

    const [validationResults, setValidationResults] = useState({
        emailValid: null,
        nameValid: null,
        passwordValid: null,
        passwordMatch: null,
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    useEffect(() => {
        setValidationResults({
            emailValid: userInfo.email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email) : null,
            nameValid: userInfo.name ? /^[a-zA-Z가-힣]+$/.test(userInfo.name) : null,
            passwordValid: userInfo.password
                ? /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(userInfo.password)
                : null,
            passwordMatch:
                userInfo.password && userInfo.passwordCheck ? userInfo.password === userInfo.passwordCheck : null,
        });
    }, [userInfo]);

    return {
        userInfo,
        validationResults,
        handleInputChange,
    };
};

export default useUserInfo;
