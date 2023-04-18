import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, Chip } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../assets/files/resume.pdf';
import space from '../assets/images/space.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    background: `url(${space})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
      backgroundColor: 'green',
      color: 'white',
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
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    color: '#ffffff',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: 'green',
      color: 'white',
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
      <div className={classes.skills}>
        <Chip label="MongoDB" className={classes.chip} />
        <Chip label="AWS" className={classes.chip} />
        <Chip label="GCP" className={classes.chip} />
        <Chip label="Python" className={classes.chip} />
        <Chip label="Node.js" className={classes.chip} />
        <Chip label="TypeScript" className={classes.chip} />
        <Chip label="React" className={classes.chip} />
        <Chip label="Flutter" className={classes.chip} />
        <Chip label="Docker" className={classes.chip} />
        <Chip label="Kubernetes" className={classes.chip} />
        <Chip label="Git" className={classes.chip} />
        <Chip label="Rust" className={classes.chip} />
        <Chip label="Solidity" className={classes.chip} />
        <Chip label="Ethereum" className={classes.chip} />
      </div>
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
