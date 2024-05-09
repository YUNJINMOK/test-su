import React from "react";
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center py-16 gap-5">
        <span className="text-3xl font-semibold">로그인</span>
        <input
          className="w-[300px] h-[50px] rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="아이디"
        />
        <input
          className="w-[300px] h-[50px] rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="비밀번호"
        />
        <div className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer">
          로그인
        </div>
      </div>
    </Layout>
  );
}
