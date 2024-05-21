import React from "react";
import { useEffect, useState } from "react";

// const VALIDTIME = 180
const VALIDTIME = 180

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

const AuthTimer = () => {
    const [remainTime, setRemainTime] = useState(VALIDTIME);
    const [reSendState, setReSendState] = useState(false);
    const onClickReSend = () => {
        // 인증번호 재전송
        console.log("인증번호 재전송")
        setRemainTime(VALIDTIME);
        setReSendState(false)
      }
      const ValidTimer = () => {
        return reSendState  ? <p onClick={onClickReSend}>인증번호 재전송</p> : <p>{formatTime(remainTime)}</p>
      }
      
    useEffect(() => {
        const timer = setInterval(() => {
          if(remainTime > 0){
            setRemainTime((prevTime) => prevTime - 1);
          }else{
            clearInterval(timer);
            setReSendState(true);
          }
        },1000);
      
        return () => {
          clearInterval(timer);
        }
      
      },[remainTime]);
      
    return (
      <>
        <div className="flex w-full justify-end px-[20px] py-[15px]">
          <div className="content_accent font_title_bold_sm">
            {/* <p>{formatTime(remainTime)}</p> */}
            <ValidTimer />
          </div>
        </div>
      </>
    );
}
export default AuthTimer;