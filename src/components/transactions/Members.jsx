import React, { useState } from 'react'
import clsx from 'clsx'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'



export default function Members({ img, name, pos }) {
    const [display, setDisplay] = useState(<AiFillEye />)

    function displayHandler(){
        if (display.type.name === 'AiFillEye') {
            setDisplay(<AiFillEyeInvisible />)
        }else{
            setDisplay(<AiFillEye />)
        }
        console.log(display);
    }

  return (
    <div className={clsx(
        "flex justify-between items-center",
        "my-4"
    )}>
        <img 
            src={img} 
            alt="avatar" 
            width={40}
            className={clsx(
                "rounded-full",
                "mx-5"
            )}/>
        <div className={clsx(
            "mx-5",
            "text-sm"
        )}>
            <h4 className={clsx(
                "font-semibold"
            )}>{name}</h4>
            <p className={clsx(
                "text-slate-400"
            )}>{pos}</p>
        </div>
        <div className={clsx(
            "mx-5 px-2 py-1",
            "flex justify-between items-center",
            "bg-slate-200",
            "rounded",
            "cursor-pointer"
        )} onClick={displayHandler}>
            {display}
            <p className={clsx(
                "mx-2",
                "text-slate-500"
            )}>Display</p>
        </div>
    </div>
  )
}
