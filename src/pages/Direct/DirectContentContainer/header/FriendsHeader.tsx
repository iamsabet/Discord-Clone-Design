import { FaPersonFalling } from "react-icons/fa6";
import ThemeIcon from "../../../../shared/ThemeIcon";

const FriendsHeader = () => {
  return (
    <div className="top-navigation">
      <span>
        <FaPersonFalling />
      </span>
      <span>Friends</span>

      <ThemeIcon />
    </div>
  );
};

export default FriendsHeader;
