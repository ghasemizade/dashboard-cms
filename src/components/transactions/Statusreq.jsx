import React, {  } from 'react'
import clsx from 'clsx'

export default function Statusreq({title, textColor, bgColor}) {

  return (
    <div className={clsx(
        "text-xs",
        textColor,
        bgColor,
        "py-1 px-2",
        "rounded-full",
        "w-fit"
      )}>{title}</div>
  )
}
