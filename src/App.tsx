import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Member, Home } from '@screens';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ThemeContext from './context/theme';
import CountContext from './context/count';
import { Button } from 'antd';
import { useCountHook } from '@hooks';

function App() {
  const [background, setBackground] = useState('#fff');
  const [color, setColor] = useState('#000');
  const [theme, setTheme] = useState('light');
  const { state, dispatch } = useCountHook();

  const onChangeTheme = (type: string) => {
    if (type === 'light') {
      setBackground('#fff');
      setColor('#000');
      setTheme('light');
    } else {
      setBackground('#000');
      setColor('#fff');
      setTheme('dark');
    }
  }

  return (
    <div style={{
      background,
      color,
      height: '100vh',
    }}>
      <Button type='primary' onClick={() => onChangeTheme('dark')}>Dark</Button>
      <Button onClick={() => onChangeTheme('light')}>Light</Button>
      <CountContext.Provider value={{ count: state.count, setCount: dispatch }}>
        <ThemeContext.Provider value={{ background, color, onChangeTheme, currentTheme: theme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/member" element={<Member />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </CountContext.Provider>
    </div>
  )
}

export default App
