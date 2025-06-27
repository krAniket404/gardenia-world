import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const intro = [
  {
    title: 'Welcome to Gardenia World School',
    description:
      'At Gardenia World School, we believe that education is not just about academics, but about holistic development. Our school is a place where students from Class 1 to 5 learn, grow, and thrive in a nurturing environment.',
  },
  {
    title: 'Our School Environment',
    description:
      'Our school boasts a big playground where students play games like football, cricket, and badminton. Our library is stocked with a wide range of books on various subjects, and our computer room provides students with hands-on experience in using technology.',
  },
  {
    title: 'Our Dedicated Team',
    description:
      'Our teachers are kind, helpful, and dedicated to providing quality education. They teach various subjects like Maths, Science, and English, ensuring that our students receive a well-rounded education. Our staff is cooperative and caring, making sure every student feels comfortable and supported.',
  },
  {
    title: '',
  },
];

const About = () => {
  return (
    <>
      <div className="container mx-auto my-16 mt-40">
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Welcome to Gardenia World School
          </h2>
          <p>
            At Gardenia World School, we believe that education is not just
            about academics, but about holistic development. Our school is a
            place where students from Class 1 to 5 learn, grow, and thrive in a
            nurturing environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
