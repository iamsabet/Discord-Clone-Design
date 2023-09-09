import { FaChevronDown } from "react-icons/fa6";
import { useChannelBarStore } from "../../../store/ChannelBar.store";
import { IoMdClose } from "react-icons/io";
const ChannelsHeader = () => {
  const { openServerMenuFlag, toggleOpenServerMenu } = useChannelBarStore(
    (state) => state
  );
  return (
    <div
      className="channel-block"
      onClick={() => {
        toggleOpenServerMenu();
      }}
    >
      <h6 className="channel-block-text text-ellipsis line-clamp-1">
        Server Name
      </h6>
      {openServerMenuFlag ? (
        <IoMdClose size="18" className={`chevron`} />
      ) : (
        <FaChevronDown size="14" className={`chevron`} />
      )}
    </div>
  );
};

export default ChannelsHeader;
