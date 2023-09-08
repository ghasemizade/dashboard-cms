import clsx from 'clsx'
import React from 'react'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'


export default function Header() {
  return (
    <header className={clsx(
      "flex"
    )}>
      <div>
        DASHBOARD
      </div>
      <div className={(
        "flex"
      )}>
        <IoNotificationsOutline size={30}/>
        <TbWorld size={30}/>
        <IoSettingsOutline size={30}/>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </header>
  )
}
