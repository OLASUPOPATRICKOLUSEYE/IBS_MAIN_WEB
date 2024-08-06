"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import ComputerIcon from '@mui/icons-material/Computer';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import WebIcon from '@mui/icons-material/Web';
import ScienceIcon from '@mui/icons-material/Science';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Button, Card, CardContent, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const services = [
  { 
    icon: <ComputerIcon fontSize="large" />, 
    title: 'IT Solutions', 
    subtitle: 'Our IT solutions encompass a range of services, from system integration and custom software development to IT consulting and cloud solutions. We aim to optimize your technology infrastructure for enhanced performance.', 
    link: '/services/it' 
  },
  { 
    icon: <AgricultureIcon fontSize="large" />, 
    title: 'Agribusiness', 
    subtitle: 'Our agribusiness services offer comprehensive farm management solutions, including precision farming, crop monitoring, and sustainable practices. We help you maximize yield and efficiency while minimizing environmental impact.', 
    link: '/services/agriculture' 
  },
  { 
    icon: <WebIcon fontSize="large" />, 
    title: 'Web Development', 
    subtitle: 'We specialize in creating responsive, user-friendly websites tailored to your business needs. From e-commerce platforms to corporate websites, our web development services ensure a strong online presence.', 
    link: '/services/web-development' 
  },
  { 
    icon: <ScienceIcon fontSize="large" />, 
    title: 'Crop Science', 
    subtitle: 'Our crop science services include advanced agronomy practices, soil health analysis, and pest management strategies. We leverage the latest research to improve crop yield and quality sustainably.', 
    link: '/services/crop-science' 
  },
  { 
    icon: <NetworkCheckIcon fontSize="large" />, 
    title: 'Network Solutions', 
    subtitle: 'Our network solutions ensure reliable connectivity and robust infrastructure for your business. We provide network design, installation, and maintenance to keep your operations running smoothly.', 
    link: '/services/network-solutions' 
  },
  { 
    icon: <SmartToyIcon fontSize="large" />, 
    title: 'Agri-Tech', 
    subtitle: 'We bring smart farming technologies to the forefront of agriculture. Our agri-tech solutions include IoT-based monitoring, automated irrigation systems, and data-driven insights to enhance farm productivity.', 
    link: '/services/agri-tech' 
  },
];

const OurProfession = () => {
  const router = useRouter();

  return (
    <div className="flex-col bg-gray-300 h-full py-20 flex items-center">
        <div className="container flex flex-col items-center py-12 font-bold w-full text-center">
            <div className="bg-[#0a0229] rounded-full flex items-center justify-center w-40 h-10 text-white">
                IBS COMPANY
            </div>
            <div className="text-[#0a0229] py-6 text-xl">
                How Professional IT/Agribusiness <br /> Services Can Drive 
                <div className="text-[#ec2525]">Success</div>
            </div>
        </div>
      
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-white hover:text-white p-5 transition-transform transform hover:scale-105 hover:bg-[#ec2525] text-[#0a0229] cursor-pointer"
            onClick={() => router.push(service.link)}
          >
            <CardContent className="group">
              <div className="flex justify-center mb-5 h-14 w-14 transition-colors group-hover:text-white">
                {service.icon}
              </div>
              <Typography variant="h5" component="div" className="mb-2">
                {service.title}
              </Typography>
              <Typography variant="body2" color="inherit" className='mb-4 text-justify'>
                {service.subtitle}
              </Typography>
              <div className="flex justify-center items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <AddCircleOutlineIcon />
                <Button className="ml-2 bg-white text-[#ec2525]">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProfession;
