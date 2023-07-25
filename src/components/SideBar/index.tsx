import React from "react";
import {BsPlus, BsFillLightningFill, BsGearFill, BsDiscord} from 'react-icons/bs'
import {FaPoo} from 'react-icons/fa'

const SideBar = () =>{
    return (
        <div className="sidebar">

            <SideBarIcon  icon={<BsDiscord size="26" />} text='Home' />
            <Divider />
            <SideBarIcon  icon={<BsPlus size="34" />} text='Add Server' />
            <SideBarIcon  icon={<BsFillLightningFill size="24" />} text='Premium' />
            <SideBarIcon  icon={<FaPoo size="24" />} text='Poo' />
            <Divider />
            <SideBarIcon  icon={<BsGearFill size="26" />} text='Settings' />
        </div>
    )
}

interface Props {
    icon: React.ReactNode;
    text : string
}   

const SideBarIcon = ({icon, text='tooltip'}: Props) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text} 💡
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar