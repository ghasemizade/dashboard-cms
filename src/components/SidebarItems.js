import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function SidebarItems({title, icon, route}) {
  return (
    <Link to={route} className={clsx(
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
    </Link>
  )
}
