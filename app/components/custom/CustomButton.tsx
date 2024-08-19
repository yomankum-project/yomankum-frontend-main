import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import React from "react"

type ButtonProps = {
  name?: string
  disabled?: boolean
  onClick?: () => void
  bg?: "active" | "inactive"
  type?: "button" | "submit" | "reset"
  children: React.ReactNode
} & Partial<Pick<HTMLButtonElement, "className">>

export const CustomButton = ({
  name,
  disabled,
  onClick,
  bg = "active",
  type = "submit",
  children,
  className,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      name={name ?? ""}
      className={cn(
        {
          "text-white bg-primary hover:bg-primary/90": bg === "active",
          "text-black bg-neutral hover:bg-neutral/90": bg === "inactive",
        },
        className
      )}
    >
      {children}
    </Button>
  )
}
