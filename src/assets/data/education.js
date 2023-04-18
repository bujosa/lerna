import intec from '../images/intec.png';
import us from '../images/us.png';

const education = {
  masterDegree: {
    header: "Master's Degree",
    title: 'Software Engineer: Cloud, Data and Technologies Management',
    university: 'University of Sevilla',
    location: 'Sevilla, Spain',
    date: 'June 2022',
    gpa: '3.6/4.0',
    logo: us,
  },
  bachelorDegree: {
    header: "Bachelor's Degree",
    title: 'Software Engineer',
    university: 'Instituto Tecnológico de Santo Domingo (INTEC)',
    location: 'Santo Domingo, RD',
    date: 'April 2021',
    gpa: '3.8/4.0',
    logo: intec,
  },
  certifications: [
    'NestJS Certified - Official Course',
    'Ethereum Dev. Bootcamp - Alchemy University',
    "Google's Go (golang) Programming Language - Todd McLeod",
  ],
};

export default education;
