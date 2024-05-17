import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import jsQR from "jsqr";

export default function QrPage() {
  const navigate = useNavigate();

  const handleQrScan = useCallback(
    async (data) => {
      try {
        console.log("서버로 데이터 전송 중:", data);
        const response = await axios.post("/users/testqr", { qrData: data });
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

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });
        startQrScanning(stream);
      } catch (error) {
        console.error("카메라 액세스 거부:", error);
      }
    };

    const startQrScanning = (stream) => {
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
          canvas.scale(-1, 1);
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
            handleQrScan(code.data);
          }
        }
        requestAnimationFrame(scan);
      };
      requestAnimationFrame(scan);
    };

    requestCameraPermission();
  }, [handleQrScan]);

  return (
    <div className="qrSection">
      <Link to="/home" className="qrArrow">
        <IoIosArrowBack color="white" />
      </Link>
      <p className="qrText">QR 코드를 촬영해주세요</p>
      <div className="qrZone">
        <canvas id="canvas" width="400" height="400"></canvas>
      </div>
    </div>
  );
}
