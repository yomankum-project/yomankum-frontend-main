"use client"

import Image from "next/image"
import React, { useMemo } from "react"
import Logo from "@/assets/png/logo.png"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const SideNavBar = React.memo(() => {
  const pathname = usePathname()

  // Memoize the active styles
  const getLinkClasses = (href: string) =>
    cn("py-[20px] px-[30px] text-neutral2", {
      "text-black": pathname === href,
    })

  return (
    <aside className="border border-red-500">
      <div className="px-[50px] py-[40px]">
        <Link href="/main">
          <Image src={Logo} alt="logo" width={120} height={120} />
        </Link>
      </div>

      <div className="flex flex-col">
        {SideNavBarList.map((item) => (
          <Link
            className={getLinkClasses(item.href)}
            href={item.href}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  )
})

const SideNavBarList = [
  {
    name: "가계부",
    href: "/main",
  },
  {
    name: "달력 가계부",
    href: "/calendar",
  },
  {
    name: "가계부 분석",
    href: "/analysis",
  },
  {
    name: "마이페이지",
    href: "/account",
  },
]
