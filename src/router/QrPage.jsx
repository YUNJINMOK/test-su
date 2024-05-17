import React, { useCallback, useEffect, useState } from "react";
import "../style/qrpage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import jsQR from "jsqr";
import axios from "axios";

export default function QrPage() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [qrData, setQrData] = useState(null);

  console.log(permissionGranted);

  const navigate = useNavigate();

  const handleQrScan = useCallback(
    async (data) => {
      try {
        console.log("서버로 데이터 전송 중:", data);
        const response = await axios.post("/api/visit", { qrData: data });
        console.log("서버 응답:", response.data);

        console.log("방문 완료");
        setTimeout(() => {
          navigate("/stamp");
        }, 1000);
      } catch (error) {
        console.error("서버로 데이터 전송 중 오류 발생:", error);
      }
    },
    [navigate]
  );

  const startQrScanning = useCallback(
    (stream) => {
      const video = document.createElement("video");
      video.srcObject = stream;
      video.setAttribute("playsinline", true);
      video.play();
      const canvasElement = document.getElementById("canvas");
      const canvas = canvasElement.getContext("2d");
      const scan = () => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvasElement.height = video.videoHeight;
          canvasElement.width = video.videoWidth;
          canvas.save();
          canvas.scale(-1, 1); // 좌우 반전
          canvas.drawImage(
            video,
            -canvasElement.width,
            0,
            canvasElement.width,
            canvasElement.height
          );
          canvas.restore();
          const imageData = canvas.getImageData(
            0,
            0,
            canvasElement.width,
            canvasElement.height
          );
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            setQrData(code.data);
            handleQrScan(code.data);
          }
        }
        requestAnimationFrame(scan);
      };
      requestAnimationFrame(scan);
    },
    [handleQrScan]
  );

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment", // 셀카 모드로 설정
          },
        });
        // 카메라 액세스 허용됨
        setPermissionGranted(true);
        startQrScanning(stream);
      } catch (error) {
        // 권한 거부 또는 오류 발생
        console.error("카메라 액세스 거부:", error);
      }
    };
    requestCameraPermission();
  }, [startQrScanning]);

  return (
    <div className="qrSection">
      <Link to="/home" className="qrArrow">
        <IoIosArrowBack color="white" />
      </Link>
      <p className="qrText">QR 코드를 촬영해주세요</p>
      <div className="qrZone">
        {qrData ? (
          <p>QR 코드 데이터: {qrData}</p>
        ) : (
          <canvas id="canvas" width="300" height="300"></canvas>
        )}
      </div>
    </div>
  );
}
