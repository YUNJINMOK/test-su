import React from "react";
import Layout from "../components/Layout";
import { PiPlantLight } from "react-icons/pi";
import { PiFlower } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { PiTreeLight } from "react-icons/pi";

export default function Home2() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <span className="pt-8 ml-8">지금 수목원은</span>
        <div className="py-2 ml-8 flex">
          <FiSun className="text-xl" />
          <span className="ml-2">?</span>
        </div>
        <span className=" pt-8 ml-[10%] text-2xl">asdf님 안녕하세요!</span>
        <p className="py-2 ml-[10%]">내가 모은 스템프: 5개</p>
        <div className="w-full flex flex-col items-center py-6">
          <div className="w-[80%] h-[135px] rounded-lg bg-[#D9D9D9] flex justify-center items-center">
            <PiTreeLight className="text-7xl" />
            <div className="w-[50%] ml-2">
              <span className="text-2xl font-semibold">대구수목원 소개</span>
              <p>이용시간, 주의 사항 등</p>
            </div>
          </div>
          <div className="w-[80%] h-[140px] flex justify-between py-4">
            <div className="w-[47%] h-full rounded-lg bg-[#D9D9D9] flex flex-col items-center justify-center">
              <PiFlower className="text-6xl" />
              <span className="text-xl">산림문화전시관</span>
            </div>
            <div className="w-[47%] h-full rounded-lg bg-[#D9D9D9] flex flex-col items-center justify-center">
              <PiPlantLight className="text-6xl" />
              <span className="text-xl">목재문화체험장</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
