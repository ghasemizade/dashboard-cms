import clsx from 'clsx'
import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaChartLine } from "react-icons/fa";
import { FcSalesPerformance } from 'react-icons/fc'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineUserAdd, AiOutlineShop} from 'react-icons/ai'
import { TbArrowsExchange2, TbMessages } from 'react-icons/tb'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import { MdOutlineFeedback, MdOutlineReport } from 'react-icons/md'
import { PiBagSimpleBold } from "react-icons/pi";
import SidebarItems from './SidebarItems';
import SidebarSec from './SidebarSec';



export default function Sidebar() {
  return (
    <div className={clsx(
        "bg-slate-100 invisible md:visible",
        "w-1/5 absolute left-0 top-0",
        "border-r border-slate-300",
    )}>
        <div className={clsx("pt-14")}>
            <SidebarSec title={"Dashboard"}>
                <SidebarItems title={'Home'} icon={<LuLayoutDashboard/>}/>
                <SidebarItems title={'Analytics'} icon={<FaChartLine/>}/>
                <SidebarItems title={'Sales'} icon={<FcSalesPerformance/>}/>
            </SidebarSec>
        </div>
        <SidebarSec title={"Quick Menu"}>
            <SidebarItems title={'Users'} icon={<FiUsers/>}/>
            <SidebarItems title={'New Users'} icon={<AiOutlineUserAdd/>}/>
            <SidebarItems title={'Products'} icon={<AiOutlineShop/>}/>
            <SidebarItems title={'Transactions'} icon={<TbArrowsExchange2/>}/>
            <SidebarItems title={'Reports'} icon={<HiOutlineDocumentReport/>}/>
        </SidebarSec>
        <SidebarSec title={"Notification"}>
            <SidebarItems title={'Mail'} icon={<FiMail />}/>
            <SidebarItems title={'Feedback'} icon={<MdOutlineFeedback />}/>
            <SidebarItems title={'Messages'} icon={<TbMessages />}/>
        </SidebarSec>
        <SidebarSec title={"Staff"}>
            <SidebarItems title={'Manage'} icon={<PiBagSimpleBold />}/>
            <SidebarItems title={'Analytics'} icon={<FaChartLine />}/>
            <SidebarItems title={'Reports'} icon={<MdOutlineReport />} />
        </SidebarSec>
        
    </div>
  )
}
