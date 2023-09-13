import DirectsBar from "./DirectsBar";
import DirectContentContainer from "./DirectContentContainer";
import FriendsHeader from "./DirectContentContainer/header/FriendsHeader";

const DirectsPage = () => {
  return (
    <>
      <DirectsBar />
      <div className="content-container">
        <FriendsHeader />
        <DirectContentContainer />
      </div>
    </>
  );
};

export default DirectsPage;
