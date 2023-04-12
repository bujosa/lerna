import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Grid,
} from '@material-ui/core';
import projectData from './data/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {projectData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
                <br />
                <div>
                  {project.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      size="small"
                      label={tag}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                  ))}
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Category: </strong>
                  {project.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
