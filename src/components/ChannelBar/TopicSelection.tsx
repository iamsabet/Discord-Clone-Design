import { RiHashtag } from "react-icons/ri";
import { AiTwotoneSound } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";
const TopicSelection = ({ title, type }: ChannelType) => (
  <div className="dropdown-selection group relative">
    <div>
      {type === "text" ? (
        <RiHashtag size="22" className="dropdown-selection-icon" />
      ) : (
        <AiTwotoneSound size="20" className="dropdown-selection-icon ml-0.5" />
      )}
    </div>
    <h5 className="dropdown-selection-text">{title}</h5>
    <div className="w-fit h-full hidden group-hover:flex justify-end gap-1 -mr-0.5">
      {/*  Channel ACtion Buttons */}
      {type === "voice" && (
        <button
          className="bg-transparent w-fit flex justify-center items-center text-[16px] icon-colors"
          onClick={() => {
            console.log(title + " channel open chat clicked");
          }}
        >
          <IoChatbox />
        </button>
      )}
      <button
        className="bg-transparent w-fit flex justify-center items-center text-[16px] icon-colors"
        onClick={() => {
          console.log(title + " channel invite clicked");
        }}
      >
        <BsPersonFillAdd />
      </button>
      <button
        className="bg-transparent w-fit flex justify-center items-center text-[16px] icon-colors"
        onClick={() => {
          console.log(title + " channel settings clicked");
        }}
      >
        <RiSettings5Fill />
      </button>
    </div>
  </div>
);

export default TopicSelection;
