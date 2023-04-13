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
    marginBottom: theme.spacing(2),
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardMedia: {
    minWidth: 200,
    objectFit: 'cover',
  },
  companyName: {
    fontWeight: 'bold',
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
      <div className={classes.cardContent}>
        <CardContent>
          <Typography
            variant="h5"
            component="h3"
            className={classes.companyName}>
            {company}
          </Typography>
          <Typography variant="subtitle1">{date}</Typography>
          <Typography variant="body1">
            <p>{description}</p>
            <p>{details}</p>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default WorkHistoryCard;
