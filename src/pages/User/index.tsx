import DirectsBar from "../Direct/DirectsBar";
import UserContentContainer from "./UserContentContainer";
import UserHeader from "./header/UserHeader";

const UserPage = () => {
  return (
    <>
      <DirectsBar />
      <div className="content-container">
        <UserHeader user_id="123" />
        <UserContentContainer />
      </div>
    </>
  );
};

export default UserPage;
