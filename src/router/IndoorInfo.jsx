import React from "react";
import Layout from "../components/Layout";
import "../style/indoorinfo.css";
import Title from "../components/Title";
import Hours from "../components/Hours";
import GreenDot from "../components/GreenDot";

export default function IndoorInfo() {
  return (
    <Layout>
      <div className="indoor-section">
        <Title title="내부시설 안내" />
        {/* 산림문화전시관 */}
        <div className="forestcul">
          <p className="forestcul-title">산림문화전시관</p>
          <p className="forestcul-text">
            대구수목원의 설립목적 중 하나인 도시민들의 자연체험과 학습의 기회를
            제공하는데 일익을 담당하고, 자연학습장으로서의 역할 강화에 있습니다.
          </p>
        </div>
        {/* 이용시간 */}

        <div className="intro-time">
          <GreenDot title="이용 시간" />
          <Hours
            date1="0월 0일~0월 0일"
            time1="0시간"
            date2="0월 0일~0월 0일"
            time2="0시간"
          />
          <div className="timetable-caution">
            <p>※매주 월요일과 추석, 설날은 휴관일입니다. </p>
          </div>
        </div>

        {/* 층별안내 */}
        <div className="floorInfo">
          <GreenDot title="층별 안내" />
          <div>
            <div className="floorInfo-con-box">
              <p>1층</p>
              <div className="floorImg">
                <div></div>
                <div></div>
                {/* <img src="" alt="이미지1" />
                <img src="" alt="이미지2" /> */}
              </div>
            </div>
            <div className="floorInfo-con-box">
              <p>2층</p>
              <div className="floorImg">
                <div></div>
                <div></div>
                {/* <img src="" alt="이미지1" />
                <img src="" alt="이미지2" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* 산림문화전시관 */}
        <div className="forestcul">
          <p className="forestcul-title">산림문화전시관</p>
          <p className="forestcul-text">
            대구수목원의 설립목적 중 하나인 도시민들의 자연체험과 학습의 기회를
            제공하는데 일익을 담당하고, 자연학습장으로서의 역할 강화에 있습니다.
          </p>
        </div>
        {/* 이용시간 */}

        <div className="intro-time">
          <GreenDot title="이용 시간" />
          <Hours
            date1="0월 0일~0월 0일"
            time1="0시간"
            date2="0월 0일~0월 0일"
            time2="0시간"
          />
          <div className="timetable-caution">
            <p>※매주 월요일과 추석, 설날은 휴관일입니다. </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
