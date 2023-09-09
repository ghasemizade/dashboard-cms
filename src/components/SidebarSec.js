import React from 'react'
import clsx from 'clsx'

export default function SidebarSec({title, children}) {
  return (
    <div className={clsx(
        "pt-8 px-5",
        "font-bold text-slate-400",
    )}>
        <p className={clsx(
            'pb-4'
        )}>{title}</p>
        {children}
    </div>
  )
}
