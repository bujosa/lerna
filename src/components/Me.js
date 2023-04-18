import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, Chip } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../assets/files/resume.pdf';
import blackhole from '../assets/images/blackhole.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    background: `url(${blackhole})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  icon: {
    fontSize: 72,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: theme.palette.secondary.main,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: 60,
    color: theme.palette.secondary.contrastText,
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontStyle: 'italic',
    color: theme.palette.secondary.contrastText,
  },
  skills: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Me = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography align="center" className={classes.title}>
        {'</>'} Software Engineer
      </Typography>
      <Typography variant="h5" align="center" className={classes.subtitle}>
        Hi, I'm <strong>David Bujosa</strong>!
      </Typography>
      <Typography variant="body1" align="center" className={classes.body}>
        I'm passionate about building software that helps people solve
        real-world problems.
      </Typography>
      <Box className={classes.skills}>
        <Chip label="MongoDB" />
        <Chip label="AWS" />
        <Chip label="GCP" />
        <Chip label="Python" />
        <Chip label="Node.js" />
        <Chip label="TypeScript" />
        <Chip label="React" />
        <Chip label="Flutter" />
        <Chip label="Docker" />
        <Chip label="Kubernetes" />
        <Chip label="Git" />
        <Chip label="Rust" />
        <Chip label="Solidity" />
        <Chip label="Ethereum" />
      </Box>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<GetAppIcon />}
        href={resume}
        download>
        Download My Resume
      </Button>
    </Box>
  );
};

export default Me;
