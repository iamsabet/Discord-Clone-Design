import { FaSearch, FaHashtag, FaRegBell, FaUserCircle } from "react-icons/fa";
import ThemeIcon from "../../shared/ThemeIcon";

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..."></input>
    <FaSearch size="18" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-nav-icon" />;
const UserCircle = () => <FaUserCircle size="24" className="top-nav-icon" />;
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text"> Resident Evil </h5>;

export default TopNavigation;
