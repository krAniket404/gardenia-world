import React from 'react';

import sportsImage from '../assets/sports.png';
import artsImage from '../assets/arts.png';
import musicImage from '../assets/music.png';

const activities = [
  {
    image: sportsImage,
    title: 'Sports',
    description: 'Engaging students in various sports activities.',
  },
  {
    image: artsImage,
    title: 'Arts',
    description: 'Encouraging creativity through art and craft.',
  },
  {
    image: musicImage,
    title: 'Music',
    description: 'Fostering musical talents with various instruments.',
  },
];

const Activities = () => {
  return (
    <>
      <div className="pt-50 pb-30 w-full min-h-3xl bg-blue-primary/10 flex justify-center items-center flex-col gap-4 mb-16 px-4 md:px-8 lg:px-0">
        <h1 className="text-4xl font-bold font-gray">Our Activities</h1>
        <p className="md:max-w-3/5 text-center">
          Gardenia World School provides a wide range of activities that foster
          creativity, teamwork, and personal growth. From sports to arts, our
          programs are designed to engage students and help them discover their
          passions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mb-20 px-4 md:px-8 lg:px-0">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray/2 rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-24 h-24 mb-6"
            />
            <h2 className="text-xl font-semibold mb-2 uppercase">
              {activity.title}
            </h2>
            <p className="text-gray-600 text-center">{activity.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
