import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import { RiHashtag } from "react-icons/ri";
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
      <div
        onClick={() => setExpanded(!expanded)}
        className="dropdown-header group"
      >
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            "dropdown-header-text group-hover:text-gray-300 group-hover:text-opacity-100"
          }
        >
          {header.toUpperCase()}
        </h5>
        <FaPlus
          size="12"
          className="text-accent text-opacity-90 ml-auto my-auto"
        />
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
  const chevClass =
    "text-accent text-opacity-90 my-auto mr-1 group-hover:text-gray-300 group-hover:text-opacity-100";
  return expanded ? (
    <FaChevronDown size="8" className={chevClass} />
  ) : (
    <FaChevronRight size="8" className={chevClass} />
  );
};
const TopicSelection = ({ selection }: { selection: string }) => (
  <div className="dropdown-selection">
    <RiHashtag size="24" className="text-gray-400" />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);
const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
);

export default ChannelBar;
