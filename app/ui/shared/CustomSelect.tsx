import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { cn } from "@/lib/utils"

interface CustomSelectProps {
  className?: string
  data: { id: number; name: string; value: string }[]
  placeholder: string
}

export const CustomSelect = ({
  className,
  data,
  placeholder,
}: CustomSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data?.map((item) => (
          <SelectItem key={item.id} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
