import React from 'react';
import {lightTheme} from '../constants/theme';

const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export default ThemeContext;