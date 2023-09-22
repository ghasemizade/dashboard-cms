import React from 'react'
import clsx from 'clsx'

export default function SidebarSec({title, children}) {
  return (
    <div className={clsx(
        "pt-4 px-5",
        "font-bold text-slate-400",
    )}>
        <p className={clsx(
            'pb-2'
        )}>{title}</p>
        {children}
    </div>
  )
}
