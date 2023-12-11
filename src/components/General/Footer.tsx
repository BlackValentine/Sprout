import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const footerData = [
    {
      title: 'Contact',
      list: [
        {
          text: 'Address: 500 Terry',
        },
        {
          text: 'Francine Street',
        },
        {
          text: 'San Francisco, CA 94158',
        },
        {
          text: 'Phone: 123-456-7890',
        },
        {
          text: 'Email: info@mysite.com',
        },
      ],
    },
    {
      title: 'Shop',
      list: [
        {
          text: 'Shop All',
          route: true,
          link: '/all',
        },
        {
          text: 'Plants',
          route: true,
          link: '/plants',
        },
        {
          text: 'Pots',
          route: true,
          link: '/pots',
        },
        {
          text: 'Sale',
          route: true,
          link: '/sales',
        },
        {
          text: 'Subscriptions',
          route: true,
          link: '/subscriptions',
        },
        {
          text: 'Care',
          route: true,
          link: '/sprout/care',
        },
      ],
    },
    {
      title: 'Helpful Links',
      list: [
        {
          text: 'FQA',
          route: true,
          link: '/faq',
        },
        {
          text: 'Shipping & Returns',
          route: true,
          link: '/shipping-and-returns',
        },
        {
          text: 'Terms & Conditions',
          route: true,
          link: '/terms-and-conditions',
        },
      ],
    },
    {
      title: 'Company',
      list: [
        {
          text: 'Our Story',
          route: true,
          link: '/our-story',
        },
        {
          text: 'Contact Us',
          route: true,
          link: '/contact-us',
        },
      ],
    },
    {
      title: 'Opening Hours',
      list: [
        {
          text: 'Mon-Fri: 7am - 10pm',
        },
        {
          text: 'Saturday: 8am - 10pm',
        },
        {
          text: 'Sunday: 8am - 11pm',
        },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <div className="border-b border-solid border-timberwolf pt-20 pb-10">
        <Logo />
      </div>
      <div className="grid grid-cols-5 pt-10 pb-16 px-10 border-b border-solid border-timberwolf">
        {footerData.map((footerItem, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <h6 className="mb-5 text-2xl">{footerItem.title}</h6>
              {footerItem.list.map((item: any, index) => {
                if (item.route) {
                  return (
                    <Link key={index} to={item.link}>
                      <p>{item.text}</p>
                    </Link>
                  );
                }
                return <p key={index}>{item.text}</p>;
              })}
            </div>
          );
        })}
      </div>
      <p className="py-10 text-center">
        © 2023 by Sprout. Powered and secured by{' '}
        <a href="https://resume-fe-nu.vercel.app/" target="_blank" rel="noreferrer" className="underline">
          Black Valentine
        </a>
      </p>
    </div>
  );
}
