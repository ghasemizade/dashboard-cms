import React from 'react'
import clsx from 'clsx'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import avatar5 from '../../assets/avatar5.jpg'
import Members from './Members'

export default function Newmemeber() {
  return (
    <div className={clsx(
        "bg-slate-50",
        "shadow",
        "rounded",
        "p-2"
    )}>
        <h3 className={clsx(
            "text-2xl font-semibold"
        )}>New Join Members</h3>
        <div className={clsx(
            "my-8"
        )}>
            <Members img={avatar1} name={"Anna Keller"} pos={"Software Engineer"}/>
            <Members img={avatar2} name={"Anna Keller"} pos={"Software Engineer"}/>
            <Members img={avatar3} name={"Anna Keller"} pos={"Software Engineer"}/>
            <Members img={avatar4} name={"Anna Keller"} pos={"Software Engineer"}/>
            <Members img={avatar5} name={"Anna Keller"} pos={"Software Engineer"}/>
        </div>
    </div>
  )
}
