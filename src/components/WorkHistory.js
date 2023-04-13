import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import WorkHistoryCard from './WorkHistoryCard';
import jobData from '../assets/data/jobs';

const useStyles = makeStyles((theme) => ({
  workHistoryContainer: {
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px #E7C84B',
  },
  description: {
    overflow: 'hidden',
  },
}));

const WorkHistory = () => {
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
          <Grid key={job.id} item xs={12} sm={12} md={12}>
            <Paper elevation={3} className={classes.paper}>
              <WorkHistoryCard
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

export default WorkHistory;
