import karvi from '../images/karvi.png';
import curbo from '../images/curbo.png';

const jobData = [
  {
    id: 1,
    company: 'Karvi',
    date: '2023 - present',
    description: 'A platform for buying and selling vehicles. (karvi.com)',
    details:
      'Developed and maintained the backend of the platform using NestJS, MongoDB, and Python.',
    image: karvi,
    url: 'https://www.karvi.com',
  },
  {
    id: 2,
    company: 'Curbo Technologies',
    date: '2020 - 2023',
    description: 'A platform for buying and selling vehicles. (curbo.com)',
    details:
      'Developed and maintained the backend of the platform using NestJS, MongoDB, and GCP. The architecture of the platform is microservice-based and is deployed on GCP. I also maintained and structure the database of the platform. ',
    image: curbo,
    url: 'https://www.curbo.com',
  },
];

export default jobData;
