import { SideNavBar } from "@/components"
import { ReactNode } from "react"

export const AccountBookLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* 왼쪽에 고정된 사이드바 */}
      <SideNavBar />

      {/* 오른쪽에는 각 페이지 컨텐츠가 표시됨 */}
      <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
        {children}
      </div>
    </div>
  )
}
