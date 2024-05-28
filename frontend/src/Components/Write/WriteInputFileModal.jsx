import React from 'react'
import modalImage from '../../Assets/images/modal.png'

const WriteInputFileModal = ({ setModalOn }) => {
    return (
        <div className="surface_primary border_primary fixed top-0 left-1/2 z-[999999] flex h-[100vh] w-full -translate-x-1/2 flex-col items-center overflow-y-auto overflow-x-hidden border shadow-s mobile:top-[30px] mobile:h-auto mobile:w-max mobile:justify-center mobile:overflow-hidden mobile:rounded-[16px]">
            <div className="w-full">
                <div className="relative max-h-[264px] max-w-[480px] pt-[55%]">
                    <img
                        alt="포스트 작성 안내 이미지"
                        src={modalImage}
                        decoding="async"
                        data-nimg="fill"
                        loading="lazy"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent',
                        }}
                    />
                </div>
                <div className="max-w-[480px]">
                    <div className="modal-inner w-full max-w-[540px] overflow-hidden overflow-yF-auto px-[16px] pt-[14px] pb-[20px] mobile:max-h-[654px] mobile:px-[40px]">
                        <h4 className="content_primary font_headline_bold_sm">
                            <span className="keep-all">
                                후원자분들에게 다운로드 가능한 콘텐츠를
                                제공해보세요.
                            </span>
                        </h4>
                        <div style={{ height: '20px' }}></div>
                        <div className="content_secondary font_body_regular_lg">
                            파일을 첨부하면 유저에게 다운로드 가능한 형태로
                            파일이 제공됩니다.
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="surface_primary flex w-full justify-end gap-[16px] px-[16px] pt-[12px] pb-[22px] mobile:px-[40px]">
                        <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
                            type="button"
                            onClick={() => {
                                setModalOn(false)
                            }}
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteInputFileModal
