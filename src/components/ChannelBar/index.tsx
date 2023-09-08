import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiHashtag } from "react-icons/ri";
import CreateChannelButton from "./CreateChannelButton";
const topics = ["Resident Evil", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const ChannelBar = () => {
  return (
    <div className="channel-bar">
      <ChannelBlock />
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} />
      </div>
    </div>
  );
};

interface DropPropsType {
  header: string;
  selections: string[];
}

const Dropdown = ({ header, selections }: DropPropsType) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div className="dropdown-header group mb-1">
        <div className="flex w-full" onClick={() => setExpanded(!expanded)}>
          <ChevronIcon expanded={expanded} />
          <h5 className={"dropdown-header-text"}>{header.toUpperCase()}</h5>
        </div>
        <CreateChannelButton />
      </div>

      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

interface chevronProps {
  expanded: boolean;
}

const ChevronIcon = ({ expanded }: chevronProps) => {
  return (
    <FaChevronDown
      size="8"
      className={`chevron ${expanded ? "rotate-0" : "-rotate-90"}`}
    />
  );
};
const TopicSelection = ({ selection }: { selection: string }) => (
  <div className="dropdown-selection group">
    <RiHashtag size="22" className="dropdown-selection-icon" />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);
const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
);

export default ChannelBar;
