import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./pages/home-page/home-page";
import ProjectPage from "./pages/project-page/project-page";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import ExperiencePage from "./pages/experience-page/experience-page";
import EducationPage from "./pages/education-page/education-page";


function App() {
    const [theme, setTheme] = useState('light');
    localStorage.setItem('theme', theme)
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyles/>
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/home" component={HomePage} />
                      <Route exact path="/projects" component={ProjectPage} />
                      <Route exact path="/experience" component={ExperiencePage} />
                      <Route exact path="/education" component={EducationPage} />
                  </Switch>
              </BrowserRouter>
              <button
                  style={{
                      position: 'absolute',
                      top: '3px',
                      right: '0',
                      left: '0',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      cursor: 'pointer'
                  }}
                  title={'Toggle Dark Mode'}
                  onClick={themeToggler}
              >
                  <img
                      src="Images/moon.png"
                      alt={'dark-mode-toggler'}
                      width={'40vw'}
                      height={'40vw'}
                  />
              </button>
          </>
      </ThemeProvider>
  );
}

export default App;
