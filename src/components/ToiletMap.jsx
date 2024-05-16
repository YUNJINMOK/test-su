import React, { useEffect } from "react";
import { toiletPositions } from "../lib/positions.js";
import GpsLogo from "../assets/gpsLogo.svg";

export default function ToiletMap() {
  useEffect(() => {
    const { kakao } = window;

    // 사용자의 현재 위치 가져오기
    const getUserLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };

    // 내 위치와 화장실 위치를 표시하는 함수
    const displayMap = async () => {
      try {
        const userLocation = await getUserLocation(); // 사용자의 현재 위치 가져오기

        if (kakao) {
          const mapContainer = document.getElementById("map");
          const mapOption = {
            center: new kakao.maps.LatLng(
              userLocation.latitude,
              userLocation.longitude
            ),
            level: 5,
          };

          const map = new kakao.maps.Map(mapContainer, mapOption);

          // 사용자 현재 위치 마커 생성
          const imageSize = new kakao.maps.Size(24, 35);
          const markerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);
          const userMarker = new kakao.maps.Marker({
            map: map,
            position: mapOption.center,
            title: "내 위치",
            image: markerImage,
          });

          // 화장실 위치 마커 생성
          toiletPositions.forEach((pos) => {
            const marker = new kakao.maps.Marker({
              map: map,
              position: pos.latlng,
              title: pos.title,
            });
          });
        }
      } catch (error) {
        console.error("Error displaying map:", error);
      }
    };

    displayMap();
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
        margin: "0 auto",
      }}
    ></div>
  );
}
