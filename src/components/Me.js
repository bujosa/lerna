import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import { Computer as ComputerIcon } from '@material-ui/icons';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../data/resume.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
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
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontStyle: 'italic',
  },
}));

const Me = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ComputerIcon className={classes.icon} />
      <Typography
        variant="h3"
        component="h2"
        align="center"
        className={classes.title}>
        Hi, I'm David Bujosa
      </Typography>
      <Typography variant="h5" align="center" className={classes.subtitle}>
        Web Developer &amp; Software Engineer
      </Typography>
      <Typography variant="body1" align="center">
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
