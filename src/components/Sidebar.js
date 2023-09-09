import clsx from 'clsx'
import React from 'react'

export default function Sidebar() {
  return (
    <div className={clsx(
        "bg-slate-100 invisible md:visible",
        "min-h-screen w-1/5",
        "border-r border-slate-300",
    )}>
        <div className={clsx(
            "pt-20 px-5"
        )}>
            Dashboard
        </div>
    </div>
  )
}
