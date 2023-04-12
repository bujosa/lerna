import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

import projectsData from '../data/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    boxShadow: theme.shadows[4],
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    padding: theme.spacing(2),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
  },
  tag: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.spacing(0.5),
  },
  github: {
    marginLeft: theme.spacing(1),
  },
  pageTitle: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        {projectsData.map((project) => (
          <Grid item key={project.id}>
            <Card className={classes.card}>
              <CardHeader
                title={project.title}
                subheader={project.category}
                action={
                  <IconButton
                    aria-label="github"
                    className={classes.github}
                    onClick={() => window.open(project.github)}>
                    <GitHubIcon />
                  </IconButton>
                }
              />
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
              <CardContent className={classes.content}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
                <div className={classes.tags}>
                  {project.tags.map((tag) => (
                    <Typography
                      variant="body2"
                      key={tag}
                      className={classes.tag}>
                      {tag}
                    </Typography>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
