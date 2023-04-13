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
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#000000',
    boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.05)',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.1)',
    },
  },
  cardContent: {
    marginLeft: theme.spacing(2),
    color: '#000000',
  },
  cardMedia: {
    minWidth: 300,
    objectFit: 'auto',
    borderRadius: '10%',
    height: 200,
    width: 120,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    marginRight: theme.spacing(2),
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

const WorkHistoryCard = ({
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
      <CardMedia className={classes.cardMedia} image={image} title={company} />
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

export default WorkHistoryCard;
