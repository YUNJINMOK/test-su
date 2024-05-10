import React, { useEffect } from "react";
import GpsLogo from "../assets/gpsLogo.svg";

export default function ParkingMap() {
  useEffect(() => {
    const { kakao } = window;

    if (kakao) {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(35.802384098351425, 128.52011591230576),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      const positions = [
        {
          title: "제1 주차장",
          latlng: new kakao.maps.LatLng(35.80176475470669, 128.5201687276982),
        },
        {
          title: "제2 주차장",
          latlng: new kakao.maps.LatLng(35.802384098351425, 128.52011591230576),
        },
        {
          title: "제3 주차장",
          latlng: new kakao.maps.LatLng(35.803452716053286, 128.5190209285164),
        },
      ];

      for (let i = 0; i < positions.length; i++) {
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);

        const marker = new kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: markerImage,
        });
      }
    }
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
