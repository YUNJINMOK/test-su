import React from "react";
import "../style/main.css";
import MainLogo from "../assets/gpsLogoWhite.svg";

export default function MainPage() {
  return (
    <>
      <div className="main-con">
        <img className="main-logo" src={MainLogo} alt="메인 로고" />
        <div className="main-title">대구 수목원</div>
      </div>
    </>
  );
}
