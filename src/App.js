import React, { useState } from 'react';
import './css/App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from 'reactstrap';
import Contact from './components/Contact';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';

function App() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="#projects"
              onClick={() => {
                toggle('3');
              }}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#work-history"
              onClick={() => {
                toggle('2');
              }}>
              Work History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#education"
              onClick={() => {
                toggle('4');
              }}>
              Education
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <div className="content-container">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Welcome to my personal website!</h4>
                <p>
                  Here you can find information about my work history, projects,
                  and education.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <WorkHistory />
          </TabPane>
          <TabPane tabId="3">
            <Projects />
          </TabPane>
          <TabPane tabId="4">
            <Education />
          </TabPane>
        </TabContent>
        <Contact />
      </div>
    </div>
  );
}

export default App;
