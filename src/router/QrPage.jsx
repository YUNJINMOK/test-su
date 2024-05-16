import React, { useEffect, useRef, useState } from "react";
import "../style/qrpage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import jsQR from "jsqr";

export default function QrPage() {
  const [permissionGranted, setPermissionGranted] = useState(null);
  const [qrData, setQrData] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
        videoRef.current.srcObject = stream;
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

    // 페이지 벗어날 때 스트림 해제
    return () => {
      if (permissionGranted === true) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, [permissionGranted]);

  const startQrScanning = () => {
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
          setQrData(code.data);
        }
      }
      requestAnimationFrame(scan);
    };
    requestAnimationFrame(scan);
  };

  useEffect(() => {
    if (permissionGranted === true) {
      startQrScanning();
    }
  }, [permissionGranted]);

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
        }}
      >
        {qrData && (
          <p style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
            QR 코드 데이터: {qrData}
          </p>
        )}
        {permissionGranted !== false && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></video>
        )}
        {permissionGranted !== false && (
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          ></canvas>
        )}
      </div>
    </div>
  );
}
