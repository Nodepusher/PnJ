import React, { useState, useEffect, useCallback, isValidElement } from "react";
import EditInfo from "../../Components/MyPage/EditInfo";
import EditUploadImage from "../../Components/MyPage/EditUploadImage";
import EditUpdateImage from "../../Components/MyPage/EditUpdateImage";
import EditUpdateInput from "../../Components/MyPage/EditUpdateInput";
import EditInputMsg from "../../Components/MyPage/EditInputMsg";
import SaveInfo from "../../Components/MyPage/SaveInfo";
import axios from "axios";
import "./animation.css";
import { loadUser } from "../../store/action";
import { useDispatch } from "react-redux";

const MyPageEditContainer = ({ user, profile }) => {
  const dispatch = useDispatch();
  // 보여주기 위한 스테이트
  const [uploadImage, setUploadImage] = useState(null);
  // 전송하기 위한 스테이트
  const [file, setFile] = useState(null);
  const [updateUserInfo, setUpdateUserInfo] = useState({
    password: "",
    passwordCheck: "",
  });
  const [updateState, setUpdateState] = useState(false);
  const [valid, setValid] = useState({
    passwordValid: null,
    passwordMatch: null,
  });
  const [isSaved, setIsSaved] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    phoneNumber: "",
    profileImage: "",
  });
  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setUpdateUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  useEffect(() => {
    setValid({
      passwordValid: updateUserInfo.password
        ? /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            updateUserInfo.password
          )
        : null,
      passwordMatch:
        updateUserInfo.password && updateUserInfo.passwordCheck
          ? updateUserInfo.password === updateUserInfo.passwordCheck
          : null,
    });
  }, [updateUserInfo]);

  const handleSave = async (e) => {
    e.preventDefault();
    const isPasswordEmpty =
      !updateUserInfo.password && !updateUserInfo.passwordCheck;
    const isPasswordValid = valid.passwordValid && valid.passwordMatch;
    const canUpdate = !isPasswordEmpty && isPasswordValid;
    if (canUpdate) {
      setUpdateState(true);
      const formData = new FormData();
      formData.append("profileImage", file);
      formData.append("password", updateUserInfo.password);

      try {
        // 서버에 업데이트 요청 보내기
        await axios.put("http://localhost:4000/user/updateUserInfo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Update successful");
        dispatch(loadUser());
      } catch (error) {
        console.error("Error updating user info:", error);
      }
    }
    setIsSaved(true);
    setAnimationClass("fadeIn");
    setTimeout(() => {
      setAnimationClass("fadeOut");
      setTimeout(() => {
        setIsSaved(false);
      }, 200); // fadeOut 애니메이션이 끝난 후에 컴포넌트를 제거
    }, 2000); // 2초 후에 fadeOut 시작
  };

  useEffect(() => {
    setUserInfo({
      email: user.email,
      phoneNumber: user.phone,
    });
  }, [loadUser.fulfilled]);

  /*
  // 렌더링 시, 로그인된 상태의 정보가 있어야함
  const tempLoginData = {};
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get("http://localhost:4000/getUserInfo", {
          params: tempLoginData,
        });
        setUserInfo({
          email: user.email,
          phoneNumber: user.phone,
        });
        if (
          res.data.profileImage !== undefined &&
          res.data.profileImage !== null
        ) {
          setUploadImage(user.profile);
        } else {
          setUploadImage(false);
        }
      } catch (error) {
        setUploadImage(false);
        setUserInfo({
          email: user.email,
          phoneNumber: user.phone,
        });
      }
    };

    fetchUserInfo();
  }, [updateState]);
  */
  return (
    <>
      <div className="shrink-0 grow basis-0 overflow-x-auto">
        <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
          <div className="col-span-full">
            <form
              onSubmit={handleSave}
              method="PUT"
              encType="multipart/form-data"
            >
              <EditInfo />
              <div>
                <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
                  <div className="col-span-3 pt-[48px] mobile:pt-[56px] pb-[20px] mobile:pb-[40px]">
                    <div className="w-[297px]">
                      <div className="mb-[7px] flex items-center">
                        <strong className="content_primary font_title_bold_md mr-[6px]">
                          프로필 사진
                        </strong>
                      </div>
                      <span className="content_secondary font_body_regular_md">
                        크리에이터를 대표하는 프로필 사진을 등록 해주세요.
                      </span>
                    </div>
                  </div>
                  <div className="col-span-7 col-start-6 mobile:pt-[56px] pb-[40px]">
                    <div className="flex">
                      <EditUpdateImage
                        uploadImage={uploadImage}
                        setUploadImage={setUploadImage}
                        profile={profile}
                      />
                      <div>
                        <EditUploadImage
                          uploadImage={uploadImage}
                          setUploadImage={setUploadImage}
                          setFile={setFile}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                  <div className="col-span-3 pt-[48px] mobile:pt-[56px] pb-[20px] mobile:pb-[40px]">
                    <div className="w-[297px]">
                      <div className="mb-[7px] flex items-center">
                        <strong className="content_primary font_title_bold_md mr-[6px]">
                          계정 설정
                        </strong>
                      </div>
                      <span className="content_secondary font_body_regular_md">
                        사용자 계정 재설정
                      </span>
                    </div>
                  </div>
                  <div className="col-span-7 col-start-6 mobile:pt-[56px] pb-[40px]">
                    <div className="flex flex-col justify-between gap-y-[16px]">
                      <div>
                        <EditUpdateInput
                          content={"이메일 아이디"}
                          type={"text"}
                          value={userInfo.email}
                          readOnly={true}
                          placeholder={""}
                        />
                      </div>
                      <div>
                        <EditUpdateInput
                          name={"password"}
                          content={"비밀번호"}
                          type={"password"}
                          value={updateUserInfo.password}
                          readOnly={false}
                          onChangeInput={onChangeInput}
                          placeholder={"비밀번호를 입력해주세요"}
                        />
                        <EditInputMsg
                          text={
                            "비밀번호는 8자 이상 특수문자 1개 이상 입력해주세요."
                          }
                          isValid={valid.passwordValid}
                        />
                      </div>
                      <div>
                        <EditUpdateInput
                          name={"passwordCheck"}
                          content={"비밀번호 재입력"}
                          type={"password"}
                          value={updateUserInfo.passwordCheck}
                          readOnly={false}
                          onChangeInput={onChangeInput}
                          placeholder={"다시한번 비밀번호를 입력해주세요"}
                        />
                        <EditInputMsg
                          text={"비밀번호와 일치하지 않습니다."}
                          isValid={valid.passwordMatch}
                        />
                      </div>
                      <EditUpdateInput
                        content={"연락처"}
                        type={"text"}
                        value={userInfo.phoneNumber}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isSaved && (
        <SaveInfo animationClass={animationClass} updateState={updateState} />
      )}
    </>
  );
};

export default React.memo(MyPageEditContainer);
