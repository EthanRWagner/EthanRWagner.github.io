import React, {useState} from 'react';
import './App.css';

//material ui drawer imports
import Box from '@mui/material/Box';
import {Drawer, Avatar, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import PersonalIcon from './docs/personal-logo-400.png';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AboutIcon from '@mui/icons-material/EmojiPeopleOutlined';
import RamblingIcon from '@mui/icons-material/MoreHoriz';
import ResumeIcon from '@mui/icons-material/HandshakeOutlined';
import ProjectsIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Resume from './docs/Ethan_Wagner_Resume.pdf';

import Home from './components/HomePage';
import Projects from './components/ProjectsPage';
import About from './components/AboutPage';
import Rambling from './components/RamblingPage';

function App() {

  // state for the navBar to be toggled when completing navigation
  // or no longer needing to navigate
  const [navBar, setNavBar] = useState(false);

  // navBar will toggle on the condition that any key is pressed except
  // tab and shift due to highlighting of the navbar
  // tab goes down the navBar
  // shift + tab goes up the navBar
  const toggleNavBar = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavBar(open);
  };

  //overrides material ui text theme
  const theme = createTheme({
    typography: {
      fontFamily: ['Courier New', 'Courier', 'monospace'].join(','),
      fontSize: 20,
      fontWeight: 600,
      color: '#bb5347',
      }
    })
  
  // variables to be used for drawer items
  const navList = ['/', '/projects', '/about', '/rambling'];
  const GitHub = "https://github.com/EthanRWagner";
  const LinkedIn = "https://www.linkedin.com/in/ethanrwagner/";

  // navBar element / drawer
  const drawer = (
    <Box
      sx={{ width: 250, height: '100%' }}
      role="presentation"
      onClick={toggleNavBar(false)}
      onKeyDown={toggleNavBar(false)}
      className="navBar-box"
    >
      <List>
        {['home', 'projects', 'about', 'rambling'].map((text, index) => (
          <Link to={navList[index]} style={{ textDecoration: 'none' }}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: '#bb5347',
                  }}>
                  {(index === 0) ? <HomeIcon /> :
                  (index === 1) ? <ProjectsIcon /> :
                  (index === 2) ? <AboutIcon /> : <RamblingIcon />}
                </ListItemIcon>
                <ListItemText primaryTypographyProps={theme} primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem onClick={() => window.open(GitHub, '_blank')} key={"github"} disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: '#bb5347',
              }}>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={theme} primary={"github"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => window.open(LinkedIn, '_blank')} key={"linkedIn"} disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: '#bb5347',
              }}>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={theme} primary={"linkedIn"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => window.open(Resume, '_blank')} key={"resume"} disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: '#bb5347',
              }}>
              <ResumeIcon />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={theme} primary={"resume"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>

      <body className='main-page-background'>
        <Router>
          <div>
            <div className='header-cont'>
              <div className='menu-div'>
                <Button
                  onClick={toggleNavBar(true)}
                  startIcon={<Avatar sx={{
                                     height: '125px',
                                     width: '125px',
                                     }}
                                     src={PersonalIcon} />}
                >
                </Button>
                <Drawer
                  className='navBar-cont-active'
                  open={navBar}
                  onClose={toggleNavBar(false)}
                >
                  {drawer}
                </Drawer>
              </div>
                <small className='title-text'>ethan wagner</small>
            </div>
            <Routes>
              <Route path="/"
                     element={
                       <Home />
                     } 
              />

              <Route path="/projects"
                     element={
                       <Projects />
                     } 
              />

              <Route path="/about"
                     element={
                       <About />
                     } 
              />

              <Route path="/rambling"
                     element={
                       <Rambling />
                     } 
              />
            </Routes>
          </div>
        </Router>
      </body>
    </>
    
  );
}

export default App;
