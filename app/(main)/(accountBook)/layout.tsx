import { ReactNode } from "react"
import "../../globals.css"
import { SideNavBar } from "@/components"

export default function AccountBookLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <SideNavBar />

      <main className="flex-1 pt-[40px] px-[60px]">{children}</main>
    </div>
  )
}
