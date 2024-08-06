"use client";
import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <div className='w-full text-white'>
        <div className='flex justify-between h-32 bg-[#ec2525] text-white px-10'>
            <div className='flex items-center'>
                <div className={styles.dottedCircle}>
                    <HeadsetMicIcon className='text-3xl h-10 w-10 rounded-full' />
                </div>
                <div className='ml-4 text-3xl font-bold'>Elevating Customer Experience.</div>
            </div>
            <div className='flex items-center'>
              <div className={styles.dottedCircle}>
                <PhoneIcon className='text-3xl h-10 w-10' />
              </div>
                <div className='ml-4 bg-[#0a0229] w-48 font-normal text-center justify-center rounded-full p-4'>09021942611</div>
            </div>
        </div>

      <div className='flex flex-col justify-between bg-[#0a0229] pt-24 h-full text-center p-5'>
        <div className='flex flex-row justify-around text-center'>

          <div className='flex flex-col justify-start'>
            <div className='flex flex-row justify-center '>
                <Image src="/images/logo2rm.png" alt="Logo" width={40} height={40} />
                <span className="font-bold text-3xl">IBC</span>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col justify-start py-10 gap-6 font-normal'>
                Globally monetize plug-and-play data <br />
                it solumonotonectally disseminate <br />
                oriented business multifunctional <br />
                mind design.
              </div>
              <div className='flex flex-row pt-3'>
              <Link href='https://facebook.com' target="_blank">
                <FacebookIcon className='mx-2 cursor-pointer h-10 w-10 hover:bg-white rounded-md hover:text-[#ec2525] ease-out transition-all duration-500' />
              </Link>
              <Link href='https://twitter.com' target="_blank">
                <TwitterIcon className='mx-2 cursor-pointer h-10 w-10 hover:bg-white rounded-md hover:text-[#ec2525] ease-out transition-all duration-500' />
              </Link>
              <Link href='https://linkedin.com' target="_blank">
                <LinkedInIcon className='mx-2 cursor-pointer h-10 w-10 hover:bg-white rounded-md hover:text-[#ec2525] ease-out transition-all duration-500' />
              </Link>
              <Link href='https://pinterest.com' target="_blank">
                <PinterestIcon className='mx-2 cursor-pointer h-10 w-10 hover:bg-white rounded-md hover:text-[#ec2525] ease-out transition-all duration-500' />
              </Link>
              <Link href='https://telegram.org' target="_blank">
                <TelegramIcon className='mx-2 cursor-pointer h-10 w-10 hover:bg-white rounded-md hover:text-[#ec2525] ease-out transition-all duration-500' />
              </Link>
            </div>
            </div>
          </div>

          <div className='flex flex-col justify-start'>
            <div className='font-bold text-3xl'>Use Links</div>
            <div className='flex flex-col justify-start py-10 gap-6 font-normal'>
              <Link href='/about' className='hover:underline'>About Company</Link>
              <Link href='/team' className='hover:underline'>Meet Our Team</Link>
              <Link href='/blog' className='hover:underline'>Latest Blog</Link>
              <Link href='/contact' className='hover:underline'>Contact Us</Link>
              <Link href='/testimonials' className='hover:underline'>Testimonials</Link>
            </div>
          </div>

          <div className='flex flex-col justify-start'>
            <div className='font-bold text-3xl'>Services</div>
            <div className='flex flex-col justify-start py-10 gap-6 font-normal'>
              <Link href='/about' className='hover:underline'>About Company</Link>
              <Link href='/team' className='hover:underline'>Meet Our Team</Link>
              <Link href='/blog' className='hover:underline'>Latest Blog</Link>
              <Link href='/contact' className='hover:underline'>Contact Us</Link>
              <Link href='/testimonials' className='hover:underline'>Testimonials</Link>
            </div>
          </div>

          <div className='flex flex-col justify-start'>
            <div className='font-bold text-3xl'>Newsletter</div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col justify-start py-10 gap-6 font-normal'>
                Globally monetize plug-and-play data <br />
                it solumonotonectally disseminate <br />
                oriented business multifunctional <br />
                mind design.
              </div>
              <div className='pt-3'>
                <input type="email" placeholder="Your Email" className="p-2 text-[#0a0229] mb-2 rounded-l-md" />
                <button className="bg-[#ec2525] p-2 rounded-r-md">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-40" />

        <div className='flex pt-10 flex-row justify-between px-5'>
          <div>@Copywrite 2024 By Adebisi Techonoly | Design & Developed By: ZachPascal Global Tech</div>
          
          <div className='flex justify-between gap-5'>
            <Link href='/privacy-policy' className='hover:underline'>Privacy Policy</Link>
            <Link href='/support' className='hover:underline'>Supports</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
