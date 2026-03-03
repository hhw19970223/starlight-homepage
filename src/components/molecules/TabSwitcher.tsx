"use client"

import { cn } from "@/lib/utils"

interface Tab {
  key: string
  label: string
}

interface TabSwitcherProps {
  tabs: Tab[]
  activeTab: string
  onChange: (key: string) => void
}

export function TabSwitcher({ tabs, activeTab, onChange }: TabSwitcherProps) {
  return (
    <div className="flex border border-border rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={cn(
            "flex-1 py-2.5 text-sm font-medium rounded-md transition",
            activeTab === tab.key
              ? "bg-primary text-white"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
