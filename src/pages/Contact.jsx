import {
  AimOutlined,
  PhoneOutlined,
  SendOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';

import Button from '../components/Button';

const listItems = [
  {
    icon: <PhoneOutlined />,
    title: 'Phone',
    content: '6200814842',
    path: 'tel:+916200814842',
  },
  {
    icon: <WhatsAppOutlined />,
    title: 'Whatsapp',
    content: '6200814842',
    path: 'https://wa.me/6200814842',
  },
  {
    icon: <AimOutlined />,
    title: 'Location',
    content: [
      {
        title: 'Office:',
        text: 'PACE Tower, Near Metro Pillar No 31, 90 feet road, Kankarbagh, Patna-800020',
        map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.130711601798!2d85.157266!3d25.58721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf97f67e31741abb0!2sPACE%20Institute%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1628132403903!5m2!1sen!2sin',
      },
      {
        title: 'Campus:',
        text: '400 meter West from Tarari post office, on karath Road, Tarari, Bhojpur',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.829626003572!2d84.4126679!3d25.208967500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d73f96b6176b7%3A0x2205813af9f35c2c!2sGardenia!5e0!3m2!1sen!2sin!4v1748794973531!5m2!1sen!2sin',
      },
    ],
  },
];

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '7481960204';
    const wpMessage = `Name: ${name}.
    Message: ${message}`;
    const encodedMessage = encodeURIComponent(wpMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setName('');
    setMessage('');
  };

  return (
    <>
      <div className="container mt-40 flex flex-col lg:flex-row px-4 md:px-8 xl:px-0 mx-auto">
        <div className="w-full bg-gray-50 flex justify-center items-center flex-1 p-8 after:absolute relative lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-[2px] lg:after:h-1/5 after:top-full after:right-1/2 after:h-[2px] after:min-w-[50px] lg:after:min-w-0 after:w-1/5 after:translate-x-1/2 after:bg-black/10 lg:before:right-0 before:absolute lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:translate-x-1/2 before:top-full before:right-1/2 before:translate-x-1/2 before:-translate-y-1/2 before:bg-white before:rounded-full z-0 before:z-10 before:content-['OR'] before:h-10 before:w-10 before:flex before:justify-center before:items-center before:border before:border-black/10">
          <ul className="list-none">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4 mb-6">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  {Array.isArray(item.content) ? (
                    <>
                      <h3 className="text-lg font-semibold">{item.title}:</h3>
                      <ul>
                        {item.content.map((location, i) => (
                          <li className="mb-8" key={i}>
                            <p className="mb-4">{location.text}</p>
                            <iframe
                              src={location.map}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              style={{ border: 0 }}
                            ></iframe>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.path}>{item.content}</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center px-4 py-8 md:px-6 lg:px-8 flex-1">
          <div className="flex flex-col gap-8 w-4/5">
            <h3 className="text-2xl font-semibold">Drop a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your name:"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  className="input"
                  placeholder="Drop your message here:"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <Button icon={<SendOutlined />} variant="primary" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
