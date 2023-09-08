import { FaPlus } from "react-icons/fa6";

const CreateChannelButton = () => {
  return (
    <div
      className="ml-auto my-auto"
      onClick={(_e) => {
        console.log("CreateChannel pressed");
      }}
    >
      <FaPlus
        size="16"
        className="dark:text-gray-400 dark:text-opacity-60 dark:hover:text-opacity-100 dark:hover:text-gray-200
        text-gray-700 hover:text-gray-950 font-bold text-opacity-100"
      />
    </div>
  );
};

export default CreateChannelButton;
