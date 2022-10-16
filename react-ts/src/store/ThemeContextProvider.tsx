import React, { useState } from 'react';
import themeContext from './theme-context';

const ThemeContextProvider = (props: any) => {
  // Laret from firebase (different settings for each user)
  const [theme, setTheme] = useState<string>('light');

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{props.children}</div>
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
