import { useState } from "react";
import CreateChannelButton from "./CreateChannelButton";
import ChevronIcon from "./ChevronIcon";
import ChannelPageItem from "./ChannelPageItem";

interface DropPropsType {
  header: string;
  selections: ChannelsListType;
}
const Dropdown = ({ header, selections }: DropPropsType) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown select-none">
      <div className="dropdown-header group mb-1">
        <div className="flex w-full" onClick={() => setExpanded(!expanded)}>
          <ChevronIcon expanded={expanded} />
          <h5 className={"dropdown-header-text"}>{header.toUpperCase()}</h5>
        </div>
        <CreateChannelButton />
      </div>

      {expanded &&
        selections &&
        selections.map((selection, index) => (
          <ChannelPageItem key={selection.title + "-" + index} {...selection} />
        ))}
    </div>
  );
};

export default Dropdown;
