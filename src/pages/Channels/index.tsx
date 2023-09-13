import TopNavigation from "../../components/TopNavigation";
import ChannelBar from "./ChannelBar";
import ContentContainer from "./ChannelContentContainer";

const ChannelPage = () => {
  return (
    <>
      <ChannelBar />
      <div className="content-container">
        <TopNavigation />
        <ContentContainer />
      </div>
    </>
  );
};

export default ChannelPage;
