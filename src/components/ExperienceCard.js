import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.05)',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.1)',
    },
  },
  cardContent: {
    marginTop: theme.spacing(2),
    color: '#ffffff',
    textAlign: 'center',
    height: '200px',
  },
  cardMedia: {
    objectFit: 'contain',
    borderRadius: '50%',
    maxHeight: 200,
    maxWidth: '100%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    marginBottom: theme.spacing(2),
  },
  companyName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: '#f6c90e',
  },
  date: {
    color: '#ffffff',
    marginBottom: theme.spacing(1),
  },
  description: {
    marginBottom: theme.spacing(1),
    color: '#ffffff',
  },
  details: {
    fontStyle: 'italic',
    color: '#ffffff',
  },
}));

const ExperienceCard = ({
  company,
  date,
  description,
  details,
  image,
  highlighted,
  onMouseEnter,
  onMouseLeave,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={`${classes.card} ${highlighted ? 'highlighted' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={image}
        title={company}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h3" className={classes.companyName}>
          {company}
        </Typography>
        <Typography variant="subtitle1" className={classes.date}>
          {date}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {description}
        </Typography>
        <Typography variant="body2" className={classes.details}>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
