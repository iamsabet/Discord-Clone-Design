import { RiHashtag } from "react-icons/ri";
import { AiTwotoneSound } from "react-icons/ai";
const TopicSelection = ({ title, type }: ChannelType) => (
  <div className="dropdown-selection group">
    {type === "text" ? (
      <RiHashtag size="22" className="dropdown-selection-icon" />
    ) : (
      <AiTwotoneSound size="20" className="dropdown-selection-icon ml-0.5" />
    )}

    <h5 className="dropdown-selection-text">{title}</h5>
  </div>
);

export default TopicSelection;
