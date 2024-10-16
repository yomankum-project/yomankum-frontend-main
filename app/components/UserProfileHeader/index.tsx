"use client"

import Image from "next/image"
import React from "react"
import UserImg from "@/assets/png/cat.jpg"
import { Bell, ChevronDown } from "lucide-react"

export const UserProfileHeader = () => {
  return (
    <div className="pb-[60px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-[15px]">
          <Image
            src={UserImg}
            alt="user img"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p>냥만큼씨</p>
          <ChevronDown className="w-[20px]" />
        </div>
        <Bell />
      </div>
      <div className="py-[20px] text-neutral1 font-par2 border-b">
        2023.11.11. 수요일 | 13:00 PM
      </div>
    </div>
  )
}
