import React from "react";
import "../style/qrpage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function QrPage() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      // 카메라 액세스 허용됨
    })
    .catch(function (error) {
      // 권한 거부 또는 오류 발생
      console.error("카메라 액세스 거부:", error);
    });
  return (
    <div className="qrSection">
      <Link to="/home" className="qrArrow">
        <IoIosArrowBack color="white" />
      </Link>
      <p className="qrText">QR 코드를 촬영해주세요</p>
      <div className="qrZone">
        <p>화면을 인식 중입니다</p>
        <canvas id="canvas" width="300" height="300"></canvas>
      </div>
    </div>
  );
}
