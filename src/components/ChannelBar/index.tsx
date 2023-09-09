import { questions, topics, voiceChannels } from "../../constants";
import ChannelsHeader from "./Header/ChannelsHeader";
import Dropdown from "./DropDown";
import ServerActions from "./ServerActions";
import { useChannelBarStore } from "../../store/ChannelBar.store";

const ChannelBar = () => {
  const { closeServerMenu } = useChannelBarStore((state) => state);
  return (
    <div className="channel-bar relative">
      <ChannelsHeader />
      <ServerActions />
      <div
        className="channel-container"
        onClick={() => {
          closeServerMenu();
        }}
      >
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Voice Channels" selections={voiceChannels} />
      </div>
    </div>
  );
};

export default ChannelBar;
