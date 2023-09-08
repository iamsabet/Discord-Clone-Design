import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-full h-full fixed left-0 top-0 p-0 m-0 flex overflow-hidden">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
