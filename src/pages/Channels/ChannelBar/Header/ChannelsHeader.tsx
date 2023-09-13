import { FaChevronDown } from "react-icons/fa6";

import { IoMdClose } from "react-icons/io";
import { useChannelBarStore } from "../../../../store/ChannelBar.store";
const ChannelsHeader = ({ server_id, channel_id }: ChannelSubPageProps) => {
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
      <p className="channel-block-text text-ellipsis line-clamp-1">
        Server Name {server_id} / {channel_id}
      </p>
      {openServerMenuFlag ? (
        <IoMdClose size="18" className={`chevron`} />
      ) : (
        <FaChevronDown size="14" className={`chevron`} />
      )}
    </div>
  );
};

export default ChannelsHeader;
