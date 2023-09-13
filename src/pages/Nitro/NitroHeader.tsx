import { SiMediafire } from "react-icons/si";
import ThemeIcon from "../../shared/ThemeIcon";

const NitroHeader = () => {
  return (
    <div className="top-navigation">
      <div className="flex justify-between gap-1 w-fit">
        <span>
          <SiMediafire />
        </span>
        <span>Nitro</span>
      </div>
      <ThemeIcon />
    </div>
  );
};

export default NitroHeader;
