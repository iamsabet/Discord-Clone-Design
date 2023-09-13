import DirectsBar from "../Direct/DirectsBar";
import DirectContentContainer from "../Direct/DirectContentContainer";
import LibraryHeader from "./header/LibraryHeader";

const LibraryPage = () => {
  return (
    <>
      <DirectsBar />
      <div className="content-container">
        <LibraryHeader />
        <DirectContentContainer />
      </div>
    </>
  );
};

export default LibraryPage;
