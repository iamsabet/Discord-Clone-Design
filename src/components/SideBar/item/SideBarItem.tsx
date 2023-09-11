import Pill from "./Pill";

interface Props {
  icon: React.ReactNode;
  text: string;
}

const SideBarItem = ({ icon, text = "tooltip" }: Props) => {
  return (
    <div className="sidebar-group group relative">
      <Pill />
      <div className="sidebar-icon">{icon}</div>
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBarItem;
