import { FaChevronDown } from "react-icons/fa6";

const ChannelsHeader = () => (
  <div className="channel-block">
    <h6 className="channel-block-text text-ellipsis line-clamp-1">
      Server Name
    </h6>
    <FaChevronDown size="14" className={`chevron`} />
  </div>
);

export default ChannelsHeader;
