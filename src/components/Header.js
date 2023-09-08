import clsx from 'clsx'
import React from 'react'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'
import { SiPayloadcms } from 'react-icons/si'
import Avatar from '../assets/avatar-2023.jpg'

export default function Header() {
  return (
    <header className={clsx(
      "flex justify-between items-center",
      "w-full",
      "py-2",
      "font-bold text-[#444]",
      "bg-slate-100",
      "border-b hover:shadow"
    )}>
      <div className={clsx(
        "flex items-center",
        "mx-5",
        "text-[#444]",
        "select-none",
        "md:text-2xl text-lg"
      )}>
        DASHBOARD
        <SiPayloadcms />
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
              "hover:text-black",
              "md:text-2xl text-lg"
            )}/>
            <TbWorld className={clsx(
              "mr-1",
              "cursor-pointer",
              "hover:text-black",
              "md:text-2xl text-lg"
            )}/>
            <IoSettingsOutline className={clsx(
              "mr-1",
              "cursor-pointer",
              "hover:text-black",
              "md:text-2xl text-lg"
            )}/>
          </div>
          <img 
            className={clsx(
              "rounded-full hover:border",
              "cursor-pointer",
              "select-none",
              "md:w-12 md:h-12",
              "w-10 h-10"
              )}
              draggable={false}
              src={Avatar}
              // width={40}
              // height={40} 
              alt="avatar" />
        </div>
    </header>
  )
}
