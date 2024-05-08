import GreenDot from "../components/GreenDot";
import Hours from "../components/Hours";
import Layout from "../components/Layout";
import Title from "../components/Title";
import "../style/introsumok.css";
import { PiTentLight, PiKnifeLight, PiMegaphoneLight, PiBicycleLight, PiDogLight, PiShovelLight } from "react-icons/pi";
import { useTheme } from "../context/themeProvider.js";

export default function IntroSumok() {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <Layout>
      <div className="intro-section">
        {/* 타이틀 */}
        <Title title="수목원 소개" />
        {/* 컨텐츠 */}
        {/* 이용시간 */}
        <div className="intro-time">
          <GreenDot title="이용시간" />
          <Hours date1="0월 0일~0월 0일" time1="0시간" date2="0월 0일~0월 0일" time2="0시간" date3="0월 0일~0월 0일" time3="0시간" />
          <div className="timetable-caution">
            <p>※ 온실 이용시간: 오전 10시 ~ 오후 4시</p>
            <p>※ 월요일: 온실, 산림문화전시관, 목재문화체험장 이용 불가</p>
            <p>※ 입장료·주차요금은 무료이며 발생된 쓰레기는 반드시 되가져 가야합니다.</p>
          </div>
        </div>
        {/* 주의사항 */}
        <div className="caution">
          <GreenDot title="금지사항" />
          <div className="caution-box">
            <div style={{ background: ThemeMode === "dark" ? "#292929" : "" }}>
              <PiTentLight />
              <p>주류, 버너, 텐트, 그늘막 취사 등</p>
            </div>
            <div style={{ background: ThemeMode === "dark" ? "#292929" : "" }}>
              <PiBicycleLight />
              <p>자전거, 킥보드, 인라인 스케이트</p>
            </div>
            <div style={{ background: ThemeMode === "dark" ? "#292929" : "" }}>
              <PiShovelLight />
              <p>
                식물 및 토석
                <br /> 채집, 채취
              </p>
            </div>
            <div style={{ background: ThemeMode === "dark" ? "#292929" : "" }}>
              <PiMegaphoneLight />
              <p>확성기, 마이크 등 방송기기</p>
            </div>
            <div style={{ background: ThemeMode === "dark" ? "#292929" : "" }}>
              <PiDogLight />
              <p>안내견 이외 반려동물 출입</p>
            </div>
            <div style={{ background: ThemeMode === "dark" ? "#292929" : "" }}>
              <PiKnifeLight />
              <p>기타 위협을 줄 수 있는 물품</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
