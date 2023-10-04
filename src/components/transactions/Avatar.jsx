import React from 'react'
import clsx from 'clsx'


export default function Infocustomer({name, imgsrc}) {
  return (
    <>
        <img
          className={clsx(
            "rounded-full",
            "mr-4"
          )}
          src={imgsrc} 
          alt="avatar" 
          width={40}/>
          <p className={clsx(
            "text-slate-500"
          )}>{name}</p>
    </>
  )
}
