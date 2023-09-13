import { topics, questions, voiceChannels } from "../../../constants";
import Dropdown from "./DropDown";

const ServerChannelsList = ({ server_id, channel_id }: ChannelSubPageProps) => {
  const sid = server_id;
  const cid = channel_id;
  return (
    // TODO: mapp load dynamicly from zustand-state
    <>
      <Dropdown header="Topics" selections={topics} />
      <Dropdown header="Questions" selections={questions} />
      <Dropdown header="Voice Channels" selections={voiceChannels} />
    </>
  );
};

export default ServerChannelsList;
