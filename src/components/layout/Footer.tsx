'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Wrapper from '@/app/wrapper';
import footerData from '../../Data/footer/footer.json';

import { Facebook, Twitter, Instagram, Pinterest, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com' },
    // { icon: <Pinterest size={20} />, href: "https://pinterest.com" },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com' },
  ];

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(footerData);
  }, []);

  if (!data) return null;

  return (
    <footer className='bg-[#1E1E1E] py-[40px]'>
      <Wrapper>
        <div className='mx-auto px-4'>
          <div className='flex justify-center gap-6 mb-8'>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
              >
                <span className='text-[#1E1E1E]'>{social.icon}</span>
              </Link>
            ))}
          </div>
          <div></div>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            <div className='space-y-4'>
              <p className='text-[#FFFFFF] text-[24px]  leading-[25px]'>
                <span className='text-[#B0A6BD]'>{data.brand.name.split(' ')[0]} </span>
                {data.brand.name.split(' ')[1]}
              </p>
              <p className='text-[#FFFFFF] text-[16px]  leading-[22px]'>{data.brand.description}</p>
              <div className='space-y-2 text-[#FFFFFF] text-[14px] '>
                <p>{data.brand.contact.phone}</p>
                <p>{data.brand.contact.email}</p>
                <p>{data.brand.contact.location}</p>
              </div>
            </div>

            {/* Dynamic Sections */}
            {data.sections.map((section: any) => (
              <div key={section.title} className='space-y-4'>
                <h3 className='text-[#FFFFFF] text-[18px]  leading-[22px] font-medium'>
                  {section.title}
                </h3>
                <ul className='space-y-2'>
                  {section.links.map((link: any) => (
                    <li key={link.label}>
                      <Link href={link.href} className='text-[#FFFFFF] text-[14px]  hover:text-gray-800'>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div className='space-y-4'>
              <h3 className='text-[#FFFFFF] text-[18px]  leading-[22px] font-medium'>
                {data.newsletter.title}
              </h3>
              <p className='text-[#FFFFFF] text-[14px]  leading-[20px]'>{data.newsletter.description}</p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-200 text-[#FFFFFF] text-[14px] '
                />
              </div>
              <button className='px-4 py-2 text-white rounded-r  text-[14px] '>Subscribe →</button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='mt-8 pt-8 border-t border-gray-200'>
            <div className='flex justify-between items-center'>
              <p className='text-[#FFFFFF] text-[14px] '>{data.bottom.copyright}</p>

              <div className='flex space-x-4'>
                {data.bottom.policies.map((policy: any) => (
                  <Link
                    key={policy.label}
                    href={policy.href}
                    className='text-[#FFFFFF] text-[14px]  hover:text-gray-800'
                  >
                    {policy.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
