import React, { useEffect, useState, useCallback } from 'react';

const Modal = ({ type, modalState, closeModal }) => {
  const [modalObj, setModalObj] = useState({
    title: "",
    content: "",
    modalStyle: { display: "none" }
  });

  useEffect(() => {
    const checkType = {
      title: "",
      content: "",
      modalStyle: { display: "none" }
    };

    switch (type) {
      case "phone":
        checkType.title = "휴대폰 인증번호 발송 실패";
        checkType.content = "휴대폰번호를 다시 입력해주세요";
        checkType.modalStyle = { display: "block" };
        break;
      case "duplEmail":
        checkType.title = "중복된 이메일입니다";
        checkType.content = "이메일을 다시 입력해주세요";
        checkType.modalStyle = { display: "block" };
        break;
      case "fail":
        checkType.title = "잘못 입력 하셨습니다.";
        checkType.content = "약관 동의 또는 다시 입력해주세요";
        checkType.modalStyle = { display: "block" };
        break;
      case 'reEmailAuth':
        checkType.title = "인증 이메일을 보냈습니다.";
        checkType.content = "이메일 인증을 진행해주세요.";
        checkType.modalStyle = { display: "block" };
        break;
      case 'alreadyEmailAuth':
        checkType.title = "이미 이메일 인증이 완료되었습니다.";
        checkType.content = "P&J 서비스를 이용하실 수 있습니다.";
        checkType.modalStyle = { display: "block" };
        break;
      case 'failEmailAuth':
        checkType.title = "이메일 인증에 실패하였습니다.";
        checkType.content = "회원가입을 다시 진행해주세요.";
        checkType.modalStyle = { display: "block" };
        break;
      case 'failVerify' : 
        checkType.title = "인증을 실패하였습니다"
        checkType.content = "인증을 다시 진행해주세요."
        checkType.modalStyle = { display: "block" };
        break;
      default:
        // 기본 설정은 모달을 숨깁니다.
        checkType.title = "";
        checkType.content = "";
        checkType.modalStyle = { display: "none" };
        break;
    }

    setModalObj({
      title: checkType.title,
      content: checkType.content,
      modalStyle: checkType.modalStyle
    });

  }, [type, modalState]);

  const onClickClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <div className="z-0" style={modalObj.modalStyle}>
      <div
        className="surface_primary border_primary fixed top-1/2 left-1/2 z-50 box-border flex min-w-[360px]
        -translate-y-1/2 -translate-x-1/2 transform flex-col items-center justify-center rounded-[16px] border p-[32px] shadow-s"
      >
        <h4 className="content_primary font_headline_bold_sm mb-[12px] text-center">
          {modalObj.title}
        </h4>
        <div className="content_secondary font_body_regular_lg max-w-[300px] text-center">
          {modalObj.content}
        </div>
        <div className="mt-[24px] flex w-full items-center justify-between">
          <div className="flex-1">
            <button
              onClick={onClickClose}
              aria-label="button"
              className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
              type="button"
            >
              확인
            </button>
          </div>
        </div>
      </div>
      <div className="dimmed_40 fixed top-0 left-0 z-40 h-full w-full"></div>
    </div>
  );
};

export default React.memo(Modal);
