import React from 'react';
import {
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

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
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
      <h5>Certifications</h5>
      <ul>
        <li>NestJS Certified - Oficial Course</li>
        <li>Ethereum Dev. Bootcamp - Alchemy University</li>
        <li>Google's Go (golang) Programming Language - Tood McLeod </li>
      </ul>
    </div>
  );
};

export default Education;
