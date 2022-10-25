import React, { useState } from 'react';
import themeContext from './theme-context';


const usersTheme = window.localStorage.getItem('theme') || 'dark';

const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState<string>(usersTheme);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{props.children}</div>
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
