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
        "border-r border-slate-300",
        "h-full",
        "w-80",
        "fixed z-10 top-0 left-0",
        "overflow-hidden",
        "py-14"
    )}>
        <div >
            <SidebarSec title={"Dashboard"}>
                <SidebarItems route={'dashboard-cms/'} title={'Home'} icon={<LuLayoutDashboard/>}/>
                <SidebarItems route={'dashboard-cms/analytics'} title={'Analytics'} icon={<FaChartLine/>}/>
                <SidebarItems route={'dashboard-cms/sales'} title={'Sales'} icon={<FcSalesPerformance/>}/>
            </SidebarSec>
        </div>
        <SidebarSec title={"Quick Menu"}>
            <SidebarItems route={'dashboard-cms/newusers'} title={'New Users'} icon={<AiOutlineUserAdd/>}/>
            <SidebarItems route={'dashboard-cms/users'} title={'Users'} icon={<FiUsers/>}/>
            <SidebarItems route={'dashboard-cms/products'} title={'Products'} icon={<AiOutlineShop/>}/>
            <SidebarItems route={undefined} title={'Transactions'} icon={<TbArrowsExchange2/>}/>
            <SidebarItems route={undefined} title={'Reports'} icon={<HiOutlineDocumentReport/>}/>
        </SidebarSec>
        <SidebarSec title={"Notification"}>
            <SidebarItems route={undefined} title={'Mail'} icon={<FiMail />}/>
            <SidebarItems route={undefined} title={'Feedback'} icon={<MdOutlineFeedback />}/>
            <SidebarItems route={undefined} title={'Messages'} icon={<TbMessages />}/>
        </SidebarSec>
        <SidebarSec title={"Staff"}>
            <SidebarItems route={undefined} title={'Manage'} icon={<PiBagSimpleBold />}/>
            <SidebarItems route={undefined} title={'Analytics'} icon={<FaChartLine />}/>
            <SidebarItems route={undefined} title={'Reports'} icon={<MdOutlineReport />} />
        </SidebarSec> 
    </div>
  )
}
