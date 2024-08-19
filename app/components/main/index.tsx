"use client"

import Image from "next/image"
import React from "react"

import MainBackground from "@/assets/png/main_bg.png"
import Logo from "@/assets/png/logo.png"
import { MainNav } from "../MainNav"
import { CustomButton } from "../custom"
import RightArrow from "@/assets/png/right_arrow.png"

export const Main = () => {
  return (
    <div className="h-full xl:(pt-[70px] px-[130px]) md:(pt-[60px] px-[95px]) sm:(px-[16px] pt-[60px]) relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] z-[-1] bg-secondary3" />
      <MainNav />
      <div className="h-full flex md:flex-col items-center">
        <div className="flex-1 w-[580px]">
          <Image
            src={MainBackground}
            alt="background"
            width={580}
            height={580}
          />
        </div>
        <div className="flex-1 w-[580px]">
          <Image src={Logo} alt="logo" width={120} height={120} />

          <div className="pb-[30px]" />

          <div className="font-head1 ">
            <p className="leading-[50px]">스마트한 가계부,</p>
            <p className="text-primary leading-0">요만큼</p>
          </div>
          <div>
            <p>요만큼은 태그를 사용한 사용자 맞춤 가계부 시스템입니다.</p>
            <p>더 빠르고 쉽게 본인만의 가계부를 완성하고 사용해 보세요.</p>
          </div>

          <div className="pb-[30px]" />

          <CustomButton className="font-par3" bg="active">
            요만큼 시작하기
            <Image src={RightArrow} alt="right arrow" width={20} height={20} />
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
