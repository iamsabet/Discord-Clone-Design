import { FaPersonFalling } from "react-icons/fa6";
import ThemeIcon from "../../../../shared/ThemeIcon";
import { useFriendsTabStore } from "../../../../store/FriendsTabStore";

const FriendsHeader = () => {
  const tabs: FriendsTabType[] = ["Online", "All", "Pending", "Blocked"];
  const { selectedTab, setTab } = useFriendsTabStore();
  return (
    <div className="top-navigation justify-between">
      <div className="flex justify-start items-center gap-2">
        <span className="text-2xl text-gray-500 rotate-[49deg]">
          <FaPersonFalling />
        </span>
        <span
          className="text-gray-900 dark:text-gray-100 font-bold
          border-r dark:border-gray-600 border-gray-500 pr-5 mr-4"
        >
          Friends
        </span>
        <div className="flex justify-start gap-5 font-semibold">
          {tabs.map((tab) => {
            const selected = selectedTab === tab;
            return (
              <button
                className={`px-3 py-1 bg-transparent rounded-lg
                  ${
                    selected
                      ? "bg-gray-500 bg-opacity-30 dark:text-white text-gray-950 text-opacity-100"
                      : `hover:bg-gray-500 hover:bg-opacity-20 hover:dark:text-gray-200 hover:text-gray-800 hover:text-opacity-100
                  dark:text-gray-400 text-gray-700 text-opacity-70`
                  }`}
                onClick={() => {
                  setTab(tab);
                }}
              >
                {tab}
              </button>
            );
          })}
          <button
            className={`px-3 py-1 bg-transparent rounded-lg
                  ${
                    selectedTab === "Add Friend"
                      ? "bg-transparent text-green-600"
                      : `hover:bg-gray-500 hover:bg-opacity-20 hover:dark:text-gray-200 hover:text-gray-800 hover:text-opacity-100
                  text-gray-100 bg-green-500`
                  }`}
            onClick={() => {
              setTab("Add Friend");
            }}
          >
            Add Friend
          </button>
        </div>
      </div>

      <ThemeIcon />
    </div>
  );
};

export default FriendsHeader;
