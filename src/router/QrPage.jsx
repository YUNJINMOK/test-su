import React, { useEffect, useRef, useState, useCallback } from "react";
import "../style/qrpage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import jsQR from "jsqr";
import axios from "axios";

export default function QrPage() {
  const [permissionGranted, setPermissionGranted] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment", // 환경 모드 설정
          },
        });
        // 카메라 액세스 허용됨
        setPermissionGranted(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        // 권한 거부 또는 오류 발생
        console.error("카메라 액세스 거부:", error);
        setPermissionGranted(false);
      }
    };

    // 페이지 진입 시 권한 확인
    if (permissionGranted === null) {
      requestCameraPermission();
    }
  }, [permissionGranted]);

  const handleQrScan = useCallback(
    async (data) => {
      try {
        console.log("서버로 데이터 전송 중:", data);
        const response = await axios.post("/users/testQr", { qrData: data });
        console.log("서버 응답:", response);

        // 방문 완료 알림 표시 후 스탬프 페이지로 이동
        setScannedData(data);
        setTimeout(() => {
          navigate("/stamp");
        }, 1000);
      } catch (error) {
        console.error("서버로 데이터 전송 중 오류 발생:", error);
      }
    },
    [navigate]
  );

  const startQrScanning = useCallback(() => {
    if (!permissionGranted) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");

    const scan = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        canvas.width = videoWidth;
        canvas.height = videoHeight;
        canvasContext.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우기
        canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight);
        const imageData = canvasContext.getImageData(
          0,
          0,
          videoWidth,
          videoHeight
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          console.log("QR 코드 스캔 성공:", code.data);
          handleQrScan(code.data);
        } else {
          console.log("QR 코드 스캔 실패");
        }
      }
      requestAnimationFrame(scan);
    };
    requestAnimationFrame(scan);
  }, [permissionGranted, handleQrScan]);

  useEffect(() => {
    if (permissionGranted === true) {
      startQrScanning();
    }
  }, [permissionGranted, startQrScanning]);

  return (
    <div className="qrSection">
      <Link to="/home" className="qrArrow">
        <IoIosArrowBack color="white" />
      </Link>
      <p className="qrText">QR 코드를 촬영해주세요</p>
      {permissionGranted === false && (
        <p className="qrText">카메라 액세스 권한이 거부되었습니다.</p>
      )}

      <div
        className="qrZone"
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          overflow: "hidden",
          paddingTop: "30px",
        }}
      >
        {permissionGranted !== false && (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 2,
              }}
            ></video>
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></canvas>
          </>
        )}
      </div>

      {scannedData && <div className="qrSuccessMessage">방문 완료</div>}
    </div>
  );
}
