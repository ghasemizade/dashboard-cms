import clsx from 'clsx'
import React from 'react'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'
import Avatar from '../assets/avatar-2023.jpg'

export default function Header() {
  return (
    <header className={clsx(
      "flex justify-between items-center",
      "w-full",
      "py-2",
      "text-2xl font-bold text-[#444]",
      "bg-slate-100",
      "border-b hover:shadow"
    )}>
      <div className={clsx(
        "mx-5",
        "text-[#444]"
      )}>
        DASHBOARD
      </div>
      <div className={clsx(
        "flex items-center",
        "mx-5"
      )}>
          <div className={clsx(
            "flex",
            "mr-1"
          )}>
            <IoNotificationsOutline className={clsx(
              "mr-1",
              "cursor-pointer",
              "hover:text-black"
            )}
              size={25}/>
            <TbWorld className={clsx(
              "mr-1",
              "cursor-pointer",
              "hover:text-black"
            )}
              size={25}/>
            <IoSettingsOutline className={clsx(
              "mr-1",
              "cursor-pointer",
              "hover:text-black"
            )}
              size={25}/>
          </div>
          <img 
            className={clsx(
              "rounded-full hover:border",
              "cursor-pointer"
              )}
              src={Avatar}
              width={40}
              height={40} 
              alt="avatar" />
        </div>
    </header>
  )
}
