"use client"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { CustomSearchInput } from "@/ui/shared/CustomSearchInput"
import { useState } from "react"

enum FinancialRecordFilter {
  ALL = "전체",
  INCOME = "수입",
  EXPENSE = "지출",
}

const buttonData = [
  FinancialRecordFilter.ALL,
  FinancialRecordFilter.INCOME,
  FinancialRecordFilter.EXPENSE,
]

export const SearchNav = () => {
  const [financialRecordFilter, setFinancialRecordFilter] = useState(
    FinancialRecordFilter.ALL
  )

  return (
    <div>
      <div className="flex gap-[10px]">
        {buttonData.map((filter) => (
          <Button
            key={filter}
            variant={financialRecordFilter === filter ? "active" : "secondary3"}
            onClick={() => setFinancialRecordFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div>
        <CustomSearchInput />
      </div>
    </div>
  )
}
