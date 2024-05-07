import React from "react";
import Layout from "../components/Layout";
import Textbox from "../components/Textbox";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center items-center py-10">
        <div className="w-[300px] h-[100px]  ">
          <div className=" relative w-full h-full flex items-center">
            <div className="w-full h-full flex flex-col ml-4 justify-center">
              <span>앱 이용방법</span>
              <span>스템프 찍고 다양한 경품 받기!</span>
            </div>
            <img
              className=" absolute right-[10%] top-4 w-[30%] -z-10"
              src="https://images.unsplash.com/photo-1517157488732-b80ab10430e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="진목픽 이미지"
            />
          </div>
        </div>
        <div className="w-[300px] h-[390px] bg-[#ECECEC] rounded-lg flex flex-col">
          <Textbox title="수목원소개" text="이용시간, 주의사항 등" />
          <Textbox title="내부 시설 안내" text="전시관, 체험장 소개" />
          <Textbox title="편의시설 안내" text="ㅁㄴㅇㄻㄴㅇㄹ" />
        </div>
      </div>
    </Layout>
  );
}
