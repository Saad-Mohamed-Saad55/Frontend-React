
import React from 'react';
import Link from 'react-router-dom';
import './Header.css';
import logo from './images/logo.jpg';
import HeaderItems from "../HeaderItems/HeaderItems";


const Header = ({
  language,
  toggleLanguage,
  isDarkMode,
  toggleTheme,
  setShowHome,
  setShowSignIn,
    name,
    auth,
    role,
    userId
}) => {

    // const { auth, setAuth, name } = useContext(AuthContext);

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        </Link>
          <HeaderItems role={role} language={language} isDarkMode={isDarkMode} name={name} auth={auth} toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} userId={userId}/>
      </div>
      
    </header>
  );
};

export default Header;
