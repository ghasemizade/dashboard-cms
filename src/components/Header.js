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
      "border-b hover:shadow",
      "fixed z-20"
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
            "flex justify-center items-center",
            "mr-1"
          )}>
            <div className={clsx(
              "w-8 md:w-12 h-8 md:h-12",
              "rounded-full",
              "flex justify-center items-center",
              "cursor-pointer",
              "relative"
            )}>
              <IoNotificationsOutline className={clsx(
                "mr-1",
                "cursor-pointer",
                "hover:text-black",
                "md:text-2xl text-lg"
              )}/>
                <div className={clsx(
                  "h-[14px] md:h-[18px]",
                  "min-w-[14px] md:min-w-[18px]",
                  "bg-red-600",
                  "rounded-full",
                  "absolute top-1 left-3 md:left-5",
                  "text-white text-[10px] md:text-[12px]",
                  "flex justify-center items-center",
                  "px-[2px] md:px-[5px]"
                )}>2</div>
            </div>
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
              alt="avatar" />
        </div>
    </header>
  )
}
