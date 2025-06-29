import React from 'react';
import '../App.css';
import heroImage from '../assets/hero-img.jpeg';
import pattern from '../assets/pattern.jpg';
import Button from '../components/Button';
import { UsergroupAddOutlined, YoutubeOutlined } from '@ant-design/icons';
import CountBox from '../components/CountBox';

const counts = [
  { label: 'Students', value: 500, color: 'blue-primary' },
  { label: 'Teachers', value: 50, color: 'green-primary' },
  { label: 'Classes', value: 20, color: 'black' },
];

const specials = [
  {
    title: 'Real-World Learning Opportunities',
    description:
      'Gardenia World School is incorporating real-world learning opportunities into its regular board curriculum. This approach enables students to connect with the real world and develop practical skills through field trips, constructions, cognitive celebrations, exhibitions, and more.',
    color: 'text-blue-primary',
    borderColor: 'before:bg-blue-primary',
  },
  {
    title: 'Montessori-Powered Education',
    description:
      'The school follows the Montessori method, which focuses on individualized learning, hands-on activities, and collaborative play. This approach encourages children to learn at their own pace, fostering independence, creativity, and critical thinking.',
    color: 'text-green-primary',
    borderColor: 'before:bg-green-primary',
  },
  {
    title: 'Holistic Development',
    description:
      'Gardenia World School prioritizes holistic development, offering a range of activities that cater to different interests and talents. Students can participate in sports, games, and extracurricular activities that promote physical, emotional, and social growth.',
    color: 'text-black',
    borderColor: 'before:bg-black',
  },
  {
    title: 'Support for Individual Learning Pace',
    description:
      'The school recognizes that every child learns differently and at their own pace. Gardenia World School provides a supportive environment that accommodates different learning styles, ensuring that each student can reach their full potential.',
    color: 'text-red-500',
    borderColor: 'before:bg-red-500',
  },
  {
    title: 'Intrinsic Happiness through Joy of Learning',
    description:
      'The school aims to make learning a joyful experience, promoting intrinsic happiness and motivation among students. By removing academic year restrictions, Gardenia World School allows students to engage with learning materials seamlessly.',
    color: 'text-yellow-500',
    borderColor: 'before:bg-yellow-500',
  },
  {
    title: 'State-of-the-Art Facilities',
    description:
      "While specific facilities may vary, schools like Gardenia often feature modern infrastructure, including well-equipped classrooms, libraries, and playgrounds. However, it's best to confirm specific facilities with Gardenia World School directly.",
    color: 'text-purple-500',
    borderColor: 'before:bg-purple-500',
  },
  {
    title: 'Experienced Faculty',
    description:
      'The school has a team of dedicated and experienced teachers who are passionate about providing quality education. They work closely with students to ensure they receive the support they need to excel academically and personally.',
    color: 'text-orange-500',
    borderColor: 'before:bg-orange-500',
  },
];

function Home() {
  return (
    <>
      <div className="relative mt-30 lg:mt-0 lg:h-[80vh] xl:h-screen flex flex-col lg:flex-row items-center lg:justify-center container mx-auto gap-8 px-4 lg:px-8 xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-1 relative items-center text-center lg:text-left lg:items-start">
          <img
            src={pattern}
            alt="Dotted Background"
            className="object-cover absolute w-[250px] h-[250px] -z-10 top-0 left-0 -translate-x-1/4 -translate-y-1/2 hidden md:block"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Nurturing <span className="text-blue-primary">Minds</span>,<br />
            Shaping <span className="text-green-primary">Futures</span>
          </h1>
          <p className="md:text-lg xl:text-xl">
            At Gardenia World School, we provide quality education for students
            upto Class 5, fostering academic excellence and holistic development
            in a nurturing environment.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button variant="primary" icon={<UsergroupAddOutlined />}>
              Enroll Now
            </Button>
            <Button
              variant="secondary"
              icon={<YoutubeOutlined />}
              onClick={() =>
                window.open(
                  'https://www.youtube.com/@Gardenia_World_School',
                  '_blank'
                )
              }
            >
              Explore on YouTube
            </Button>
          </div>
          <div className="lg:hidden w-full py-2">
            <marquee direction="reverse" className="italic text-lg">
              <span className="text-red-500 font-bold">Notice:</span> Within
              next 5 years students will pass CBSE class 10 from Gardenia World
              School.
            </marquee>
          </div>
        </div>
        <div className="md:flex-1">
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute w-4/5 left-1/10 bottom-25 py-2 border-y border-dashed">
          <marquee direction="reverse" className="italic text-lg">
            <span className="text-red-500 font-bold">Notice:</span> Within next
            5 years students will pass CBSE class 10 from Gardenia World School.
          </marquee>
        </div>
      </div>
      <div className="relative mt-5 md:-mt-10 lg:-mt-20 grid grid-cols-2 md:grid-cols-3 w-3/4 lg:w-4/5 xl:w-1/2 mx-auto rounded-t-lg overflow-hidden">
        <CountBox count={20} label="Teachers" bg="bg-blue-primary" />
        <CountBox count={250} label="Students" bg="bg-green-primary" />
        <CountBox count={10} label="Classes" bg="bg-black" last="true" />
      </div>
      <div className="mt-20 bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center">
          Why choose Gardenia World School?
        </h2>
        <p className="text-center mt-8 mb-16 px-4 lg:w-3/5 mx-auto">
          At Gardenia World School, we believe that education is not just about
          academics, but about developing social skills, discipline, and values.
          Our school prepares students to face the challenges of the world and
          life, while celebrating diversity and promoting inclusivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 px-4 lg:px-8 xl:px-0 container mx-auto">
          {specials.map((special, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg bg-white shadow-sm text-gray relative before:absolute before:h-1 before:w-full md:before:h-full md:before:w-1 ${special.borderColor} overflow-hidden before:left-0 before:top-0`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${special.color}`}>
                {special.title}
              </h3>
              <p>{special.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
