import {
  CaretRightOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const footerHeading = {
  fontSize: '1.75rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textDecoration: 'underline',
  textDecorationColor: 'white',
  textUnderlineOffset: '0.4em',
  textDecorationThickness: '0.1em',
  marginBottom: '1rem',
};

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Activities', path: '/activities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const contactLinks = [
  {
    name: '6200814842',
    path: 'tel:+916200814842',
    icon: <PhoneOutlined />,
  },
  {
    name: '6200814842',
    path: 'https://wa.me/+916200814842',
    icon: <WhatsAppOutlined />,
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/share/1EhgJBE3Le/',
    icon: <FacebookOutlined />,
  },
  {
    name: 'YouTube',
    path: 'https://www.youtube.com/@Gardenia_World_School',
    icon: <YoutubeOutlined />,
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/gardenia_world_school?utm_source=qr&igsh=MmFsd29iem9kODQ4',
    icon: <InstagramOutlined />,
  },
];

const Footer = () => {
  return (
    <div className="bg-[url('./assets/footer-bg.jpg')] bg-cover z-0 bg-center after:-z-10 after:absolute relative after:top-0 after:left-0 after:h-full after:w-full after:bg-gray/80 text-white p-12 sm:p-16">
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-20">
          <div className="flex flex-col gap-4">
            <h3 style={footerHeading}>Address</h3>
            <p className="text-xl">
              <CaretRightOutlined />
              Office
            </p>
            <p className="text-sm">
              PACE Tower, Near Metro Pillar No 31, 90 feet road, Kankarbagh,
              Patna-800020
            </p>
            <p className="text-xl">
              <CaretRightOutlined />
              Campus
            </p>
            <p className="text-sm">
              400 meter West from Tarari post office, on karath Road, Tarari,
              Bhojpur
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.829626003572!2d84.4126679!3d25.208967500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d73f96b6176b7%3A0x2205813af9f35c2c!2sGardenia!5e0!3m2!1sen!2sin!4v1748794973531!5m2!1sen!2sin"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className="flex flex-col gap-4">
            <h3 style={footerHeading}>Quick Links</h3>
            <ul className="list-none flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block transition-colors after:content-[''] after:block after:h-[1px] after:bg-white after:transition-all after:w-full after:scale-x-0 hover:after:scale-x-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 style={footerHeading}>Contact Us</h3>
            <ul className="list-none flex flex-col gap-4">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="transition-colors after:absolute relative inline-flex after:content-[''] after:block after:h-[1px] after:bg-white after:transition-all after:w-full after:scale-x-0 hover:after:scale-x-100 after:bottom-0 items-center gap-2"
                  >
                    <span className="text-xl">{link.icon}</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 style={footerHeading}>Follow Us</h3>
            <ul className="list-none flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="transition-colors after:absolute relative inline-flex after:content-[''] after:block after:h-[1px] after:bg-white after:transition-all after:w-full after:scale-x-0 hover:after:scale-x-100 after:bottom-0 items-center gap-2"
                  >
                    <span className="text-xl">{link.icon}</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t border-white/20 pt-4">
        Copyright © 2025 Gardenia World School. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
