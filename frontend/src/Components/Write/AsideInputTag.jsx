import React from 'react'
import WriteInputComponent from './WriteInputComponent'

const AsideInputTag = ({
    inputTag,
    setInputTag,
    handleChange,
    handleKeyDown,
}) => {
    const StDescriptTag = {
        wordBreak: 'keep-all',
    }

    return (
        <div className="mb-[16px] flex gap-x-[12px]">
            <div className="mt-[24px] mb-[8px] w-full px-[16px]">
                <div>
                    <WriteInputComponent
                        value={inputTag}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder={'포스트의 키워드를 태그로 입력하세요.'}
                    />
                    <div className="font_label_regular_sm mt-[8px] flex content_quaternary">
                        <div
                            className="mr-auto flex items-center"
                            style={StDescriptTag}
                        >
                            최대 5개, 1개당 20자까지 입력할 수 있습니다. 태그를
                            입력하면 태그별 탐색 및 검색에 활용되어 내 포스트가
                            더 많이 노출됩니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideInputTag
