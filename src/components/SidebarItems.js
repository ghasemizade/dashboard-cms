import React from 'react'
import clsx from 'clsx'

export default function SidebarItems({title, icon}) {
  return (
    <div className={clsx(
        "hover:bg-slate-200",
        "px-3 py-1",
        "rounded",
        "text-slate-500",
        "flex items-center"
    )}>
        <div className={clsx(
            "mr-1"
        )}>
            {icon}
        </div>
        {title}
    </div>
  )
}
