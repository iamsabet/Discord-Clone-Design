import { useLocation, useNavigate } from "react-router-dom";

const DirectsBar = () => {
  // let navigate = useNavigate();
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="channel-bar relative">
      <h3>Directs Channel Bar</h3>
    </div>
  );
};

export default DirectsBar;
