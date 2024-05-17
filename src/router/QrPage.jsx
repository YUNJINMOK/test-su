import React, { useEffect, useRef, useState } from "react";
import "../style/qrpage.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import jsQR from "jsqr";

export default function QrPage() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [qrData, setQrData] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });
        setPermissionGranted(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("카메라 액세스 거부:", error);
      }
    };
    requestCameraPermission();
  }, []);

  useEffect(() => {
    if (permissionGranted) {
      startQrScanning();
    }
  }, [permissionGranted]);

  const startQrScanning = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current.getContext("2d");
    const scan = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const imageData = canvas.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
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
          <canvas
            id="canvas"
            ref={canvasRef}
            width="400"
            height="400"
            style={{ display: permissionGranted ? "block" : "none" }}
          ></canvas>
        )}
        {permissionGranted && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ display: permissionGranted ? "block" : "none" }}
          ></video>
        )}
      </div>
    </div>
  );
}
