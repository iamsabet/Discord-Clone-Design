import { GiSchoolBag } from "react-icons/gi";
import ThemeIcon from "../../../shared/ThemeIcon";

const LibraryHeader = () => {
  return (
    <div className="top-navigation">
      <div className="flex justify-between gap-1 w-fit">
        <span>
          <GiSchoolBag />
        </span>
        <span>Library</span>
      </div>
      <ThemeIcon />
    </div>
  );
};

export default LibraryHeader;
