import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsDiscord,
} from "react-icons/bs";
import SideBarItem from "./item/SideBarItem";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarItem
        icon={<BsDiscord size="26" />}
        link={"/channels/@me"}
        text="Home"
      />
      <Divider />
      <SideBarItem
        icon={<BsPlus size="34" />}
        link={"/channels/123/123"}
        text="Add Server"
      />
      <SideBarItem
        icon={<BsFillLightningFill size="24" />}
        link={"/nitro"}
        text="Nitro"
      />
      {/* <SideBarItem icon={<FaPoo size="24" />} text="Poo" /> */}
      <Divider />
      <SideBarItem
        icon={<BsGearFill size="26" />}
        link={"/settings"}
        text="Settings"
      />
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
