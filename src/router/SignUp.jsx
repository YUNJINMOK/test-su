import React from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { apiPostUserRegiser } from "../api";

export default function SignUp() {
  const navigate = useNavigate()
  const {mutate} = useMutation(apiPostUserRegiser, {
    onSuccess : (data) => {
      if(data.result === true) {
        navigate('/login');
      }
    },
    onSettled: (data) => {
      if(data.result === false) {
        setError(`user_id`, {
          message: data.message,
        })
        setError(`password1`, {
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
        <span className="text-3xl font-semibold mb-7">회원가입</span>
        <form onSubmit={handleSubmit(onValid)} action="" className="flex flex-col gap-5 mb-2">
          <input {...register("user_id")} name="user_id" className="w-[300px] h-[50px] rounded-lg border-none ring-1  ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="text" placeholder="아이디" />
          {errors && (
            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                {errors?.user_id?.message}
            </span>
          )}
          <input {...register("password1")} name="password1" className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호" />
          {errors && (
            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                {errors?.password1?.message}
            </span>
          )}
          <input {...register("password2")} name="password2" className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호 확인" />
          <button className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer">가입하기</button>
        </form>
        <Link to="/login">이미 계정이 있다면 로그인</Link>
      </div>
    </Layout>
  );
}
