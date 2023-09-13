import DirectsBar from "../../Direct/DirectsBar";
import DirectContentContainer from "../../Direct/DirectContentContainer";
import NitroHeader from "../NitroHeader";

const NitroPage = () => {
  return (
    <>
      <DirectsBar />
      <div className="content-container">
        <NitroHeader />
        <DirectContentContainer />
      </div>
    </>
  );
};

export default NitroPage;
