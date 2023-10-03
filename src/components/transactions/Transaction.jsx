import React from 'react'
import Newmemeber from './Newmemeber'
import Lasttransaction from './Lasttransaction'
import clsx from 'clsx'

export default function Transactions() {
  return (
    <div className={clsx(
      "flex",
      "mx-8",
    )}>
      <Newmemeber />
      <Lasttransaction />
    </div>
  )
}
