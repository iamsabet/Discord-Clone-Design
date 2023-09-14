import { useFriendsTabStore } from "../../../store/FriendsTabStore";

const DirectContentContainer = () => {
  const { selectedTab, setTab } = useFriendsTabStore();
  return (
    <div className="text-gray-900 dark:text-gray-100">{selectedTab} Tab</div>
  );
};

export default DirectContentContainer;
