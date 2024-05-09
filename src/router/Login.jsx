import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center py-16">
        <span className="text-3xl font-semibold mb-7">로그인</span>
        <form action="" className="flex flex-col gap-5 mb-2">
          <input className="w-[300px] h-[50px] rounded-lg border-none ring-1  ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="text" placeholder="아이디" />
          <input className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호" />
          <button className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer">로그인</button>
        </form>
        <Link to="/signup">아직 계정이 없다면 회원가입</Link>
      </div>
    </Layout>
  );
}
