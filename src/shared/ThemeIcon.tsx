import { FaMoon, FaSun } from "react-icons/fa6";
import useDarkMode from "../hooks/useDarkMode";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-nav-icon" />
      ) : (
        <FaMoon size="24" className="top-nav-icon" />
      )}
    </span>
  );
};
export default ThemeIcon;
