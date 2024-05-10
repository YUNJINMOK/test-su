import React from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { apiPostUserLogin } from "../api";

export default function Login() {
  const navigate = useNavigate()
  const {mutate} = useMutation(apiPostUserLogin, {
    onSuccess : (data) => {
      if(data.result === true) {
        sessionStorage.setItem('userData', JSON.stringify(data));
        console.log(data)
        navigate('/home'); 
      }
    },
    onSettled: (data) => {
      if(data.result === false) {
        setError(`user_id`, {
          message: data.message,
        })
        setError(`user_pw`, {
          message: data.message
        })
      }
    }
  });
  const {register, handleSubmit,setError, formState:{errors}} = useForm();
  const onValid = (data) => mutate(data)
  return (
    <Layout>
      <div className="w-full flex flex-col items-center py-16">
        <span className="text-3xl font-semibold mb-7">로그인</span>
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-5 mb-2">
          <input {...register("user_id")} className="w-[300px] h-[50px] rounded-lg border-none ring-1  ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="text" placeholder="아이디" />
          {errors && (
            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                {errors?.user_id?.message}
            </span>
          )}
          <input {...register("user_pw")} className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호" />
          {errors && (
            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                {errors?.user_pw?.message}
            </span>
          )}
          <button className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer">로그인</button>
        </form>
        <Link to="/signup">아직 계정이 없다면 회원가입</Link>
      </div>
    </Layout>
  );
}
