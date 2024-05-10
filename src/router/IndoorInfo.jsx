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
        <article>
          <div className="forestcul">
            <p className="mainGreen-title">산림문화전시관</p>
            <p className="forestcul-text">수목원과 대구의 식물상을 소개하는 공간입니다. 나무 이름의 유래, 꽃의 구조, 식물, 새, 곤충의 세밀화 등 다양한 정보를 접할 수 있습니다.</p>
          </div>
          {/* 이용시간 */}
          <div className="intro-time">
            <GreenDot title="이용시간" />
            <Hours date1="3월 1일 ~ 10월 31일" time1="오전 10시 ~ 오후 5시" date2="11월 1일 ~ 2월 28일" time2="오전 10시 ~ 오후 4시" />
            <div className="timetable-caution">※매주 월요일과 추석, 설날은 휴관일입니다.</div>
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
        </article>
        {/* 목재문화체험장 */}
        <article>
          <div className="forestcul">
            <p className="mainGreen-title">목재문화체험장</p>
            <p className="forestcul-text">시민들에게 목공체험을 통한 다양한 목재문화 및 목공예에 관한 정보를 제공하는 공간입니다.</p>
          </div>
          {/* 이용시간 */}
          <div className="intro-time">
            <GreenDot title="이용 시간" />
            <Hours date1="0월 0일~0월 0일" time1="0시간" date2="0월 0일~0월 0일" time2="0시간" />
            <div className="timetable-caution">※매주 월요일과 공휴일은 휴관일입니다.</div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
