import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const intro = [
  {
    title: 'Welcome to Gardenia World School',
    description: [
      'At Gardenia World School, we believe that education is not just about academics, but about holistic development. Our school is a place where students upto class 5 learn, grow, and thrive in a nurturing environment.',
      'Nestled in a nurturing environment, Gardenia World School is a beacon of holistic education, dedicated to shaping young minds and fostering a love for learning. Our school is more than just a place of education; it is a vibrant community where students, teachers, and parents work together to create a bright future.',
    ],
  },
  {
    title: 'Our School Environment',
    description: [
      'Our school boasts a big playground where students play games like football, cricket, and badminton. Our library is stocked with a wide range of books on various subjects, and our computer room provides students with hands-on experience in using technology.',
      'Our classrooms are designed to be safe, welcoming, and stimulating. We provide a range of resources and materials to support learning and development, including:',
    ],
    list: [
      'Learning Aids: Educational toys, blocks, puzzles, and art supplies.',
      'Technology: Interactive whiteboards and educational apps.',
      'Outdoor Play Areas: Safe and well-equipped playgrounds for physical activity.',
    ],
  },
  {
    title: 'Our Dedicated Team',
    description:
      'Our teachers are kind, helpful, and dedicated to providing quality education. They teach various subjects like Maths, Science, and English, ensuring that our students receive a well-rounded education. Our staff is cooperative and caring, making sure every student feels comfortable and supported.',
  },
  {
    title: 'Why Gardenia World School?',
    description:
      'At Gardenia World School, we believe that education is not just about academics, but about developing social skills, discipline, and values. Our school prepares students to face the challenges of the world and life, while celebrating diversity and promoting inclusivity.',
  },
  {
    title: 'Extracurricular Activities',
    description:
      "We celebrate various festivals like Diwali, Eid, and Christmas, and organize annual functions and sports meets to showcase our students' talents. Our summer camps and health check-ups ensure that our students stay physically and mentally fit.",
  },
  {
    title: 'Our Philosophy',
    description:
      'At Gardenia World School, we believe in providing a well-rounded education that goes beyond academics. Our curriculum is designed to ignite curiosity, creativity, and critical thinking in our students. We focus on developing confident, compassionate, and responsible individuals who are prepared to face the challenges of the future.',
  },
  {
    title: 'State-of-the-Art Facilities',
    description:
      'Our campus is equipped with modern facilities that provide an ideal learning environment. From well-stocked libraries and advanced laboratories to sports fields and art studios, every resource is designed to support the diverse interests and talents of our students.',
  },
  {
    title: 'Experienced Faculty',
    description:
      'Our team of dedicated teachers is passionate about education and committed to nurturing the unique potential of each student. With a blend of experience and innovation, our faculty members inspire and guide our students to achieve their best.',
  },
  {
    title: 'Community and Parental Involvement',
    description:
      'We believe in the importance of holistic development. Our programs include:',
    list: [
      'Academic Excellence: A rigorous curriculum that challenges students to think critically and solve problems creatively.',
      'Sports and Physical Education: Opportunities for students to engage in various sports and physical activities that promote health and teamwork.',
      'Arts and Culture: A range of artistic and cultural activities that encourage creativity and self-expression.',
      'Community Service: Initiatives that instill a sense of social responsibility and empathy in our students.',
    ],
  },
  {
    title: 'Extracurricular Activities',
    description:
      'Beyond the classroom, Gardenia World School offers a variety of extracurricular activities that cater to different interests. From clubs and societies to special events and competitions, students have ample opportunities to explore their passions and develop new skills.',
  },
  {
    title: 'A Welcoming Community',
    description:
      'At Gardenia World School, we pride ourselves on being a welcoming and inclusive community. We celebrate diversity and encourage mutual respect and understanding among our students, staff, and parents.',
  },
  {
    title: 'About the Principal:',
    description:
      "Madhulika Madhu Ma'am, the Principal of Gardenia World School, is a highly accomplished and dedicated individual. With an MA in English, she brings a wealth of knowledge and expertise to her role. Her talent and hard work have earned her a reputation as a respected educator.",
  },
  {
    title:
      'Play, Pre-Nursery, and Kindergarten Classes at Gardenia World School',
    description: [
      'At Gardenia World School, we believe that the early years of education of a child are crucial for laying a strong foundation for lifelong learning. Our Play, Pre-Nursery, and Kindergarten classes are designed to provide a nurturing and stimulating environment where young learners can explore, discover, and grow',
      'At Gardenia World School, we are committed to providing a strong foundation for our young learners. Our Play, Pre-Nursery, and Kindergarten classes are designed to nurture the natural curiosity and creativity of children, setting them up for a lifetime of learning and success.',
    ],
    subTopic: [
      {
        title: 'Play Class',
        description:
          'Our Play class is an engaging and interactive program for our youngest learners. Through play-based activities, children develop essential skills such as:',
        list: [
          'Social Skills: Sharing, taking turns, and cooperating with others.',
          'Cognitive Skills: Problem-solving, creativity, and critical thinking.',
          'Physical Skills: Fine and gross motor skills through various play activities.',
          'Emotional Skills: Expressing feelings and developing self-confidence.',
        ],
      },
      {
        title: 'Pre-Nursery Class',
        description:
          'In our Pre-Nursery class, we build on the foundational skills developed in the Play class. Our curriculum includes:',
        list: [
          'Language Development: Introduction to basic vocabulary, storytelling, and rhymes.',
          'Numeracy Skills: Counting, recognizing numbers, and basic math concepts.',
          'Art and Craft: Exploring creativity through various art forms.',
          'Physical Activities: Developing gross motor skills through games and exercises.',
        ],
      },
      {
        title: 'Kindergarten Class',
        description:
          'Our Kindergarten program is designed to prepare children for the transition to more formal schooling. Key features include:',
        list: [
          'Literacy Skills: Phonics, reading, and writing activities',
          'Numeracy Skills: Basic arithmetic operations, shapes, and patterns.',
          'Science and Technology: Simple experiments and exploration of the natural world.',
          'Social Studies: Introduction to family, community, and cultural diversity.',
        ],
      },
    ],
  },
  {
    title: 'Teaching Methodology',
    description:
      'Our teachers use a variety of engaging and interactive methods to cater to the diverse learning styles of our students. These include:',
    list: [
      'Play-Based Learning: Learning through play and exploration.',
      'Storytelling: Using stories to develop language and imagination.',
      'Hands-On Activities: Engaging in practical activities to reinforce learning.',
      'Group Work: Encouraging collaboration and teamwork.',
    ],
  },
  {
    title: 'Join Us',
    description:
      "If you're looking for a school that provides a nurturing environment, quality education, and holistic development, look no further than Gardenia World School. Join us and give your child the best possible start in life!",
  },
];

const About = () => {
  return (
    <>
      <div className="container mx-auto my-16 mt-40 px-4 md:px-0">
        <div>
          {intro.map((item, index) => (
            <div
              key={index}
              className="mb-8 bg-white border border-black/10 p-6 rounded-lg max-w-7xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray">
                {item.title}
              </h2>
              {item.description instanceof Array ? (
                item.description.map((desc, idx) => (
                  <p key={idx} className="text-gray mb-3">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-gray">{item.description}</p>
              )}
              {item.list && (
                <ul className="list-disc pl-6 mt-3">
                  {item.list.map((listItem, idx) => (
                    <li key={idx} className="text-gray mb-2">
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
              {item.subTopic && (
                <div className="mt-6">
                  {item.subTopic.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray">
                        {sub.title}
                      </h3>
                      <p className="text-gray mb-2">{sub.description}</p>
                      <ul className="list-disc pl-6">
                        {sub.list.map((subListItem, subListIndex) => (
                          <li key={subListIndex} className="text-gray mb-2">
                            {subListItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
