import { questions, topics, voiceChannels } from "../../constants";
import ChannelsHeader from "./ChannelsHeader";
import Dropdown from "./DropDown";

const ChannelBar = () => {
  return (
    <div className="channel-bar">
      <ChannelsHeader />
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Voice Channels" selections={voiceChannels} />
      </div>
    </div>
  );
};

export default ChannelBar;
