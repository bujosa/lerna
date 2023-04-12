import React, { useState } from 'react';
import './css/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tab, Tabs, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Contact from './components/Contact';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: '#333',
    backgroundColor: 'white',
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  tabs: {
    marginRight: theme.spacing(3),
  },
  contentContainer: {
    marginTop: '20px',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  socialIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolBar}>
          <div className={classes.socialIcons}>
            <IconButton
              aria-label="GitHub"
              className={classes.socialIcon}
              onClick={() => window.open('https://github.com/bujosa')}>
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              className={classes.socialIcon}
              onClick={() =>
                window.open('https://linkedin.com/in/davidbujosa')
              }>
              <LinkedInIcon />
            </IconButton>
          </div>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="Navigation Tabs">
            <Tab label="Work History" />
            <Tab label="Projects" />
            <Tab label="Education" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.contentContainer}>
        {value === 0 && <WorkHistory />}
        {value === 1 && <Projects />}
        {value === 2 && <Education />}
        <Contact />
      </div>
    </div>
  );
}

export default App;
