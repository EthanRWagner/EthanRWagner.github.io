import React, {useState} from 'react';
import './App.css';

//material ui drawer imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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

  // navBar element / drawer
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleNavBar(false)}
      onKeyDown={toggleNavBar(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>

      <body>
        <div>
          <div>
              <Button className='home-btn' onClick={toggleNavBar(true)}>
                  <i className='material-icons' name='home-btn'>home</i>
              </Button>
              <Drawer
                open={navBar}
                onClose={toggleNavBar(false)}
              >
                {drawer}
              </Drawer>
          </div>
        </div>
      </body>
    </>
    
  );
}

export default App;
