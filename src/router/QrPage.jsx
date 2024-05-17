import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import jsQR from "jsqr";
import axios from "axios";

export default function QrPage() {
  const [qrData, setQrData] = useState(null);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const handleQrScan = useCallback(
    async (data) => {
      try {
        console.log("서버로 데이터 전송 중:", data);
        const response = await axios.post("/users/testqr", { qrData: data });
        console.log("서버 응답:", response.data);
        setQrData(data);
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
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    const canvasContext = canvas.getContext("2d");

    const scan = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvasContext.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          handleQrScan(code.data);
        }
      }
      requestAnimationFrame(scan);
    };
    requestAnimationFrame(scan);
  }, [handleQrScan]);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment", // 셀카 모드로 설정
          },
        });
        setPermissionGranted(true);
        streamRef.current = stream;
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        startQrScanning();
      } catch (error) {
        console.error("카메라 액세스 거부:", error);
      }
    };

    if (!permissionGranted) {
      requestCameraPermission();
    }

    return () => {
      const stream = streamRef.current;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [permissionGranted, startQrScanning]);

  return (
    <div className="qrSection">
      <Link to="/home" className="qrArrow">
        <IoIosArrowBack color="white" />
      </Link>
      <p className="qrText">QR 코드를 촬영해주세요</p>
      <div className="qrZone">
        {permissionGranted && (
          <video
            ref={videoRef}
            style={{ width: "100%", height: "100%" }}
            playsInline
            autoPlay
          />
        )}
        {qrData && <p>QR 코드 데이터: {qrData}</p>}
      </div>
    </div>
  );
}
