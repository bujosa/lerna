import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  educationTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  certificationTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  certificationItem: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
}));

const Education = () => {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col sm="6">
          <Card>
            <CardHeader>Master's Degree</CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Software Engineer: Cloud, data and Technologies management
              </CardTitle>
              <CardText>
                University of Sevilla, Spain (US)
                <br />
                Sevilla, Spain
              </CardText>
              <ListGroup>
                <ListGroupItem>Graduation Date: June 2022</ListGroupItem>
                <ListGroupItem>GPA: 3.6/4.0</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader>Bachelor's Degree</CardHeader>
            <CardBody>
              <CardTitle tag="h5">Software Engineer</CardTitle>
              <CardText>
                Instituto Tecnológico de Santo Domingo (INTEC)
                <br />
                Santo Domingo, RD
              </CardText>
              <ListGroup>
                <ListGroupItem>Graduation Date: April 2021</ListGroupItem>
                <ListGroupItem>GPA: 3.8/4.0</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br />
      <Typography variant="h5" className={classes.certificationTitle}>
        Certifications
      </Typography>
      <ul>
        <Typography variant="body1" className={classes.certificationItem}>
          <li>NestJS Certified - Oficial Course</li>
        </Typography>
        <Typography variant="body1" className={classes.certificationItem}>
          <li>Ethereum Dev. Bootcamp - Alchemy University</li>
        </Typography>
        <Typography variant="body1" className={classes.certificationItem}>
          <li>Google's Go (golang) Programming Language - Tood McLeod</li>
        </Typography>
      </ul>
    </Container>
  );
};

export default Education;
