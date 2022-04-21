import React, { useContext } from "react";
const ThemeContext = React.createContext({ background: '', color: '', onChangeTheme: (v: any) => {}, currentTheme: '' });

export default ThemeContext;
