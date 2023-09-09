import { questions, topics, voiceChannels } from "../../constants";
import ChannelsHeader from "./Header/ChannelsHeader";
import Dropdown from "./DropDown";
import ServerActions from "./ServerActions";

const ChannelBar = () => {
  return (
    <div className="channel-bar relative">
      <ChannelsHeader />
      <ServerActions />
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Voice Channels" selections={voiceChannels} />
      </div>
    </div>
  );
};

export default ChannelBar;
