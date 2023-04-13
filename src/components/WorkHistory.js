import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import WorkHistoryCard from './WorkHistoryCard';

const jobData = [
  {
    id: 1,
    company: 'Karvi',
    date: '2023 - present',
    description: 'A platform for buying and selling vehicles.',
    details:
      'Developed and maintained the backend of the platform using NestJS, MongoDB, and Python.',
    image: 'karvi.png',
  },
  {
    id: 2,
    company: 'Curbo Technologies',
    date: '2020 - 2023',
    description: 'A platform for buying and selling vehicles. (curbo.com)',
    details:
      'Developed and maintained the backend of the platform using NestJS, MongoDB, and GCP. The architecture of the platform is microservice-based and is deployed on GCP. I also maintained and structure the database of the platform.',
    image: 'curbo.png',
  },
];

const useStyles = makeStyles((theme) => ({
  workHistoryContainer: {
    padding: theme.spacing(2),
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
          <Grid key={job.id} item xs={12} sm={6}>
            <Paper elevation={3}>
              <WorkHistoryCard
                company={job.company}
                date={job.date}
                description={job.description}
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
