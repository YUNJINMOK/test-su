import React, { useEffect } from "react";
const { kakao } = window;

export default function KakaoMap({ userLocation, iwContent }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(35.79882161141508, 128.5228), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);
    var positions = [
      {
        title: "침엽수림",
        latlng: new kakao.maps.LatLng(35.8013, 128.52097),
      },
      {
        title: "습지원",
        latlng: new kakao.maps.LatLng(35.80052370351272, 128.5201012191372),
      },
      {
        title: "무궁화원",
        latlng: new kakao.maps.LatLng(35.799712542069514, 128.52292532334738),
      },
      {
        title: "염료 식물원",
        latlng: new kakao.maps.LatLng(35.797142822107794, 128.5259099978123),
      },
      {
        title: "양치 식물원",
        latlng: new kakao.maps.LatLng(35.795706624856, 128.52537693278592),
      },
      {
        title: "전통정원",
        latlng: new kakao.maps.LatLng(35.79479437605564, 128.52571073583277),
      },
    ];

    positions.forEach((p, index) => {
      var img = new kakao.maps.MarkerImage(`markers/gpsMarker-${index}.svg`, new kakao.maps.Size(24, 35));
      new kakao.maps.Marker({ map: map, position: p.latlng, title: p.title, image: img });
    });

    // 사용자의 위치가 있을 경우 마커로 표시
    if (userLocation) {
      const userPosition = new kakao.maps.LatLng(userLocation.latitude, userLocation.longitude);

      // 사용자 위치를 나타낼 마커 생성
      const marker = new kakao.maps.Marker({
        position: userPosition,
      });

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: false, // X 버튼으로 인포윈도우를 닫을 수 있도록 설정합니다
      });

      // 인포윈도우를 표시합니다

      infowindow.open(map, marker);

      // 마커를 지도에 표시
      marker.setMap(map);

      // 지도 중심을 사용자의 위치로 이동
      map.setCenter(userPosition);
    }
  }, [userLocation]);

  return (
    <div
      id="map"
      style={{
        width: "90%",
        height: "60vh",
      }}
    ></div>
  );
}
