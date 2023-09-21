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
        // "bg-slate-100 invisible md:visible",
        // "border-r border-slate-300",
        // "absolute top-0 bottom-0 pt-14"
    )}>
        <div >
            <SidebarSec title={"Dashboard"}>
                <SidebarItems route={'/'} title={'Home'} icon={<LuLayoutDashboard/>}/>
                <SidebarItems route={'/analytics'} title={'Analytics'} icon={<FaChartLine/>}/>
                <SidebarItems route={'/sales'} title={'Sales'} icon={<FcSalesPerformance/>}/>
            </SidebarSec>
        </div>
        <SidebarSec title={"Quick Menu"}>
            <SidebarItems route={'/newusers'} title={'New Users'} icon={<AiOutlineUserAdd/>}/>
            <SidebarItems route={'/users'} title={'Users'} icon={<FiUsers/>}/>
            <SidebarItems route={'/products'} title={'Products'} icon={<AiOutlineShop/>}/>
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
