"use client"

import Image from "next/image"
import React from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { Checkbox } from "@/ui/checkbox"
import { Button } from "@/ui/button"

import Logo from "@/assets/png/logo.png"
import GoogleLogin from "@/assets/webp/google_login.webp"
import KakaoLogin from "@/assets/webp/kakao_login.webp"
import NaverLogin from "@/assets/webp/naver_login.webp"
import { CustomButton } from "@/components"
import { useRouter } from "next/navigation"

export default function Signin() {
  const router = useRouter()
  const hookForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    errors: {
      email: {
        type: "required",
        message: "아이디 또는 비밀번호가 일치하지 않습니다.",
      },
      password: {
        type: "required",
        message: "아이디 또는 비밀번호가 일치하지 않습니다.",
      },
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="border border-neutral-3 max-w-[580px] p-[48px]">
        <Image src={Logo} alt="logo" width={120} height={120} />

        <div className="pb-[30px]" />

        <div>
          <p className="font-head2">스마트한 가계부,</p>
          <p className="font-head2 text-primary">요만큼</p>

          <p className="font-par5 text-neutral1">
            요만큼은 태그를 사용한 사용자 맞춤 가계부 시스템입니다.
          </p>
        </div>

        <div className="pb-[30px]" />

        <form
          onSubmit={hookForm.handleSubmit(onSubmit)}
          className="grid w-full items-center"
        >
          <Label htmlFor="email" className="pb-[10px]">
            이메일
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...hookForm.register("email", { required: true })}
          />

          <div className="pb-[30px]" />

          <Label htmlFor="password" className="pb-[10px]">
            비밀번호
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            {...hookForm.register("password", { required: true })}
          />
          {/* {(hookForm.formState.errors.password ||
            hookForm.formState.errors.email) && (
            <p role="alert">First name is required</p>
          )} */}

          <div className="pb-[52px]" />

          <div className="flex items-center justify-between">
            <div className="flex gap-[8px] items-center">
              <Checkbox id="terms" className="h-[20px] w-[20px]" />
              <Label htmlFor="terms">로그인 유지</Label>
            </div>

            <Button
              variant={"link"}
              type="button"
              className="font-par5"
              onClick={() => {
                router.push("/reset")
              }}
            >
              이메일/비밀번호 찾기
            </Button>
          </div>

          <p className="text-center">or</p>

          <div className="flex justify-between gap-[16px]">
            <Image
              className="cursor-pointer"
              src={GoogleLogin}
              alt="google login"
              width={100}
              height={100}
            />
            <Image
              className="cursor-pointer"
              src={KakaoLogin}
              alt="kakao login"
              width={100}
              height={100}
            />
            <Image
              className="cursor-pointer"
              src={NaverLogin}
              alt="naver login"
              width={100}
              height={100}
            />
          </div>

          <div className="pb-[30px]" />

          <CustomButton type="submit" className="w-full">
            다음
          </CustomButton>
        </form>

        <div className="pb-[30px]" />

        <div className="flex items-center justify-center gap-[4px]">
          <p className="font-par2">회원이 아니신가요?</p>
          <Button
            variant={"link"}
            className="p-0 text-primary font-par2"
            onClick={() => {
              router.push("/signup")
            }}
          >
            가입하기
          </Button>
        </div>
      </div>
    </div>
  )
}
