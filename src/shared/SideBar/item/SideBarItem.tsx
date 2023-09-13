import { Link } from "react-router-dom";
import Pill from "./Pill";

interface SidebarPropsType {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const SideBarItem = ({ icon, text = "tooltip", link }: SidebarPropsType) => {
  return (
    <Link to={link}>
      <div className="sidebar-group group relative">
        <Pill />
        <div className="sidebar-icon">{icon}</div>
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </Link>
  );
};

export default SideBarItem;
