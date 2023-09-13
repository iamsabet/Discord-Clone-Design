import { FaPersonFalling } from "react-icons/fa6";
import ThemeIcon from "../../../shared/ThemeIcon";

const UserHeader = ({ user_id }: { user_id: string }) => {
  const username = user_id;
  return (
    <div className="top-navigation">
      <div className="flex justify-between gap-1 w-fit">
        <span>
          <FaPersonFalling />
        </span>
        <span>userIcon / {username} </span>
      </div>
      <ThemeIcon />
    </div>
  );
};

export default UserHeader;
