import ChannelsHeader from "./Header/ChannelsHeader";
import ServerActions from "./ServerActions";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import ServerChannelsList from "./ServerChannelsList";
import { useChannelBarStore } from "../../../store/ChannelBar.store";

const ChannelBar = () => {
  // let navigate = useNavigate();
  let { pathname } = useLocation();

  const server_id = useMemo(() => pathname.split("/")[2], [pathname]);
  const channel_id = useMemo(() => pathname.split("/")[3], [pathname]);

  const { closeServerMenu } = useChannelBarStore((state) => state);
  return (
    <div className="channel-bar relative">
      <ChannelsHeader server_id={server_id} channel_id={channel_id} />
      <ServerActions server_id={server_id} channel_id={channel_id} />
      <div
        className="channel-container"
        onClick={() => {
          closeServerMenu();
        }}
      >
        <ServerChannelsList server_id={server_id} channel_id={channel_id} />
      </div>
    </div>
  );
};

export default ChannelBar;
