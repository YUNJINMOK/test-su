import React from 'react'
import KakaoMap from './KakaoMap';

export default function ToiletMap() {
    var positions = [
        {
            title: '주차장 화장실', 
            latlng: new kakao.maps.LatLng(35.8017, 128.52)
        },
        {
            title: '산책로 화장실1', 
            latlng: new kakao.maps.LatLng(35.7995, 128.5207)
        },
        {
            title: '산책로 화장실2', 
            latlng: new kakao.maps.LatLng(35.7987, 128.5247)
        },
        {
            title: '산책로 화장실3',
            latlng: new kakao.maps.LatLng(35.7951, 128.5256)
        }
    ];
    
    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        
    for (var i = 0; i < positions.length; i ++) {
        
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
    }

  return (
    <div>ToiletMap</div>
  )
}
