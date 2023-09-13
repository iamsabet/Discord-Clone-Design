import { FaChevronDown } from "react-icons/fa6";

interface chevronProps {
  expanded: boolean;
}

const ChevronIcon = ({ expanded }: chevronProps) => {
  return (
    <FaChevronDown
      size="8"
      className={`chevron ${expanded ? "rotate-0" : "-rotate-90"}`}
    />
  );
};

export default ChevronIcon;
