const SendVerifyEmailModal = () => {
    return (
        <>
            <div className="z-0">
        <div
          className="surface_primary border_primary fixed top-1/2 left-1/2 z-50 box-border flex min-w-[360px]
      -translate-y-1/2 -translate-x-1/2 transform flex-col items-center justify-center rounded-[16px] border p-[32px] shadow-s"
        >
          <h4 className="content_primary font_headline_bold_sm mb-[12px] text-center">
            메일 발송 실패
          </h4>
          <div className="content_secondary font_body_regular_lg max-w-[300px] text-center">
            이미 인증된 이메일입니다.
          </div>
          <div className="mt-[24px] flex w-full items-center justify-between">
            <div className="flex-1">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center  h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                type="button"
              >
                확인
              </button>
            </div>
          </div>
        </div>
        <div className="dimmed_40 fixed top-0 left-0 z-40 h-full w-full"></div>
      </div>
      

      <div className="z-0">
        <div
          className="surface_primary border_primary fixed top-1/2 left-1/2 z-50 box-border flex min-w-[360px]
      -translate-y-1/2 -translate-x-1/2 transform flex-col items-center justify-center rounded-[16px] border p-[32px] shadow-s"
        >
          <h4 className="content_primary font_headline_bold_sm mb-[12px] text-center">
            메일 발송 되었습니다.
          </h4>
          <div className="content_secondary font_body_regular_lg max-w-[300px] text-center">
            메일을 확인 후 인증 해주세요.
          </div>
          <div className="mt-[24px] flex w-full items-center justify-between">
            <div className="flex-1">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center  h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                type="button"
              >
                확인
              </button>
            </div>
          </div>
        </div>
        <div className="dimmed_40 fixed top-0 left-0 z-40 h-full w-full"></div>
      </div>
        </>
    )
}

export default SendVerifyEmailModal;