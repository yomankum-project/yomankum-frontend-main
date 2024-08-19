"use client"

import React from "react"
import Image from "next/image"
import Logo from "@/assets/png/logo.png"
import { CustomButton } from "../custom"
import { useRouter } from "next/navigation"

export const MainNav = () => {
  const router = useRouter()

  return (
    <div className="flex justify-between items-center">
      <Image src={Logo} alt="logo" width={120} height={120} />
      <div className="flex">
        <CustomButton bg="inactive" className="font-par3">
          회원가입
        </CustomButton>
        <CustomButton
          className="font-par3"
          onClick={() => router.push("/signin")}
        >
          로그인
        </CustomButton>
      </div>
    </div>
  )
}
