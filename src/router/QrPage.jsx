import React from "react";
import "../style/qrpage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function QrPage() {
  return (
    <div className="qrSection">
      <Link to="/home" className="qrArrow">
        <IoIosArrowBack color="white" />
      </Link>
      <p className="qrText">QR 코드를 촬영해주세요</p>
      <div class="qrZone">
        <p>화면을 인식 중입니다</p>
        <canvas id="canvas" width="300" height="300"></canvas>
      </div>
    </div>
  );
}
