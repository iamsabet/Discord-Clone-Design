import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsDiscord,
} from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import SideBarItem from "./item/SideBarItem";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarItem icon={<BsDiscord size="26" />} text="Home" />
      <Divider />
      <SideBarItem icon={<BsPlus size="34" />} text="Add Server" />
      <SideBarItem icon={<BsFillLightningFill size="24" />} text="Premium" />
      <SideBarItem icon={<FaPoo size="24" />} text="Poo" />
      <Divider />
      <SideBarItem icon={<BsGearFill size="26" />} text="Settings" />
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
