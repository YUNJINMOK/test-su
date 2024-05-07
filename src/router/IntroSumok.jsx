import Layout from "../components/Layout";
import "../style/introsumok.css";
import { GiCampingTent } from "react-icons/gi";

export default function IntroSumok() {
  return (
    <Layout>
      <div className="intro-part">
        {/* 타이틀 */}
        <div className="intro-title">
          <h1>수목원 소개</h1>
        </div>
        {/* 컨텐츠 */}
        {/* 이용시간 */}
        <div className="intro-time">
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용시간</h3>
          <div className="intro-timetable">
            <div className="timetable-title">
              <p>기간</p>
              <p>시간</p>
            </div>
            <div className="timetable-column">
              <p>0월 0일 ~ 0월 0일</p>
              <p>오전 0시 ~ 오후 0시</p>
            </div>
            <div className="timetable-column">
              <p>0월 0일 ~ 0월 0일</p>
              <p>오전 0시 ~ 오후 0시</p>
            </div>
            <div className="timetable-column">
              <p>0월 0일 ~ 0월 0일</p>
              <p>오전 0시 ~ 오후 0시</p>
            </div>
          </div>
          <div className="timetable-caution">
            <p>※ 월요일: 온실, 산림문화전시관, 목재문화체험장 이용 불가</p>
            <p>
              ※ 내부 시설(산림문화전시관, 목재문화체험장)의 이용시간은 ‘내부시설
              안내’ 페이지를 참고해주세요.
            </p>
            <p>※ 온실 견학 가능시간: 오전 10시 ~ 오후 4시</p>
            <p>
              ※ 입장료·주차요금은 무료이며 발생된 쓰레기는 반드시 되가져
              가야합니다.
            </p>
          </div>
        </div>
        {/* 주의사항 */}
        <div className="caution">
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주의사항</h3>
          <div className="caution-container">
            <div>
              <GiCampingTent />
              <p>주류, 버너, 텐트, 그늘막 취사 등</p>
            </div>
            <div>
              <GiCampingTent />
              <p>자전거, 전자퀵보드, 전기자전거, 인라인 등</p>
            </div>
            <div>
              <GiCampingTent />
              <p>기타 위협을 줄 수 있는 물품</p>
            </div>
            <div>
              <GiCampingTent />
              <p>흡연</p>
            </div>
            <div>
              <GiCampingTent />
              <p>확성기, 블루투스 마이크 등 방송기기</p>
            </div>
            <div>
              <GiCampingTent />
              <p>반려동물 목줄 착용 및 배변봉투 필수</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
