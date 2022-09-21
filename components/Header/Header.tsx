import { FunctionComponent, useContext } from "react";
import { ThemeContext, Themes } from "../../contexts/ThemeContextProvider";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

import "./Header.scss";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <div className='header'>
      <Link to='/' className='nav-title'>
        <h2>Where in the world?</h2>
      </Link>
      <div className='toggle-mode' onClick={() => switchTheme()}>
        <div className='toggle-icon'>
          {theme === Themes.Light ? <FaMoon /> : <BsFillSunFill />}
        </div>

        <div className='toggle-content'>
          {theme === Themes.Light ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
    </div>
  );
};
