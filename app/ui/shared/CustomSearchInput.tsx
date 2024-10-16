import React from "react"
import { Input } from "@/ui/input"
import { CustomSelect } from "./CustomSelect"

export const CustomSearchInput = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Input placeholder="태그 검색" className="w-full" />
      </div>
      <div className="flex-1"></div>
    </div>
  )
}
