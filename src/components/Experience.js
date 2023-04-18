import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ExperienceCard from './ExperienceCard';
import jobData from '../assets/data/jobs';
import space from '../assets/images/blue_space.jpg';

const useStyles = makeStyles((theme) => ({
  workHistoryContainer: {
    padding: theme.spacing(4),
    background: `url(${space})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0px 2px 4px #E7C84B',
  },
  description: {
    overflow: 'hidden',
  },
}));

const Experience = () => {
  const classes = useStyles();
  const [highlighted, setHighlighted] = useState(Array(2).fill(false));

  const handleMouseEnter = (index) => {
    const newHighlighted = [...highlighted];
    newHighlighted[index] = true;
    setHighlighted(newHighlighted);
  };

  const handleMouseLeave = (index) => {
    const newHighlighted = [...highlighted];
    newHighlighted[index] = false;
    setHighlighted(newHighlighted);
    setHighlighted(newHighlighted);
  };

  return (
    <div className={classes.workHistoryContainer}>
      <Grid container spacing={2}>
        {jobData.map((job) => (
          <Grid key={job.id} item xs={12} sm={12} md={6}>
            <Paper elevation={1} className={classes.paper}>
              <ExperienceCard
                company={job.company}
                date={job.date}
                description={
                  <span className={classes.description}>{job.description}</span>
                }
                details={job.details}
                image={job.image}
                highlighted={highlighted[job.id - 1]}
                onMouseEnter={() => handleMouseEnter(job.id - 1)}
                onMouseLeave={() => handleMouseLeave(job.id - 1)}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Experience;
