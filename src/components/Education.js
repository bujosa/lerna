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
import blackhole from '../assets/images/night_space.jpg';
import educationData from '../assets/data/education';

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
  cardText: {
    color: '#ffffff',
  },
  listGroupItem: {
    color: '#ffffff',
  },
  root: {
    marginTop: '1rem',
    background: `url(${blackhole})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  cardBody: {
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const Education = () => {
  const classes = useStyles();

  const { masterDegree, bachelorDegree, certifications } = educationData;

  const renderEducationCard = (degree) => {
    return (
      <Card className="h-100">
        <CardHeader className="bg-dark text-white">{degree.header}</CardHeader>
        <CardBody
          className="bg-secondary"
          style={{ backgroundColor: 'transparent' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CardTitle tag="h5" className="text-white">
              {degree.title}
            </CardTitle>
            <img
              src={degree.logo}
              alt={degree.university}
              width={100}
              height={100}
            />
          </div>
          <CardText className={classes.cardText}>
            {degree.university}
            <br />
            {degree.location}
          </CardText>
          <ListGroup>
            <ListGroupItem className={classes.listGroupItem}>
              <span className="text-black">Graduation Date: {degree.date}</span>
            </ListGroupItem>
            <ListGroupItem className={classes.listGroupItem}>
              <span className="text-black">GPA: {degree.gpa}</span>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  };

  const renderCertifications = () => {
    return (
      <div className="d-flex flex-column align-items-left">
        <Typography variant="h5" className={classes.certificationTitle}>
          Certifications
        </Typography>
        <ul>
          {certifications.map((certification) => (
            <Typography variant="body1" className={classes.certificationItem}>
              <li>{certification}</li>
            </Typography>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Container className={classes.root}>
      <Row>
        <Col sm="6" className="mb-4">
          {renderEducationCard(masterDegree)}
        </Col>
        <Col sm="6" className="mb-4">
          {renderEducationCard(bachelorDegree)}
        </Col>
      </Row>
      <br />
      {renderCertifications()}
    </Container>
  );
};

export default Education;
