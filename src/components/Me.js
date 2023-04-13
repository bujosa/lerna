import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../data/resume.pdf';
import blackhole from '../data/blackhole.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.secondary.contrastText,
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontStyle: 'italic',
    color: theme.palette.secondary.contrastText,
  },
  body: {
    color: theme.palette.secondary.contrastText,
  },
}));

const Me = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        className={classes.title}>
        {'</>'} Software Engineer
      </Typography>
      <Typography variant="h5" align="center" className={classes.subtitle}>
        Hi, I'm <strong>David Bujosa</strong>!
      </Typography>
      <Typography variant="body1" align="center" className={classes.body}>
        I'm passionate about building software that helps people solve
        real-world problems.
      </Typography>
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
