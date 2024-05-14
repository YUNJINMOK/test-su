import React from "react";
import Layout from "../components/Layout";
import { PiPlantLight } from "react-icons/pi";
import { PiTreeLight } from "react-icons/pi";
import Weather from "../components/Weather";
import { PiFlowerTulipLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <span className="pt-8 ml-8">지금 수목원은</span>
        <div className="py-2 ml-5">
          <Weather
            latitude="35.799208845005865"
            longitude="128.52369024972057"
          />
        </div>
        {/*
          {isLoggedIn ? (
        <div>
          <span className="pt-8 ml-[10%] text-2xl">{user.name}님 안녕하세요!</span>
          <p className="py-2 ml-[10%]">내가 모은 스템프: {user.stamps}개</p>
        </div>
      ) : (
        <div>
          <span className="pt-8 ml-[10%] text-2xl">안녕하세요!</span>
          <p className="py-2 ml-[10%]">로그인을 하셔야 스템프를 모을 수 있습니다.</p>
        </div>
      )} 이런식으로 만들예정.
       */}
        <span className=" pt-8 ml-[10%] text-2xl">asdf님 안녕하세요!</span>
        <p className="py-2 ml-[10%]">내가 모은 스템프: 5개</p>
        <div className="w-full flex flex-col items-center py-6">
          <Link to="/introsumok" className="w-[80%] h-[135px]">
            <div className="w-full h-full rounded-lg bg-[#D9D9D9] flex justify-center items-center">
              <PiTreeLight className="text-7xl" />

              <div className="w-[50%] ml-2">
                <span className="text-2xl font-semibold">대구수목원 소개</span>
                <p>이용시간, 주의 사항 등</p>
              </div>
            </div>
          </Link>
          <div className="w-[80%] h-[140px] flex justify-between py-4">
            <Link to="/indoorinfo" className="w-[47%] h-full">
              <div className="w-full h-full rounded-lg bg-[#D9D9D9] flex flex-col items-center justify-center">
                <PiFlowerTulipLight className="text-6xl" />
                <span className="text-xl">산림문화전시관</span>
              </div>
            </Link>
            <Link to="/indoorinfo2" className="w-[47%] h-full">
              <div className="w-full h-full rounded-lg bg-[#D9D9D9] flex flex-col items-center justify-center">
                <PiPlantLight className="text-6xl" />
                <span className="text-xl">목재문화체험장</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
