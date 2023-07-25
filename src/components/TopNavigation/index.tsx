import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';
  import useDarkMode from '../../hooks/useDarkMode';

  const TopNavigation = ()=>{
    return (
        <div className='top-navigation'>
            <HashtagIcon />
            <Title />
            <ThemeIcon />
            <Search />
            <BellIcon />
            <UserCircle />
        </div>
    )
  }

  const ThemeIcon = () => {

    const [darkTheme, setDarkTheme] = useDarkMode()
    const handleMode = () => setDarkTheme(!darkTheme)
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
        <FaSun size="24" className='top-nav-icon' />
        ) : (
        <FaMoon size="24" className='top-nav-icon' />
        )}
      </span>
    )

  }

  const Search = () => (
    <div className='search'>
        <input className='search-input' type='text' placeholder='Search...'></input>
        <FaSearch size='18' />
    </div>
  )
  const BellIcon = () => <FaRegBell size='24' className='top-nav-icon' />
  const UserCircle = () => <FaUserCircle size='24' className='top-nav-icon' />
  const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />
  const Title = () => <h5 className='title-text'> Resident Evil </h5>

  export default TopNavigation