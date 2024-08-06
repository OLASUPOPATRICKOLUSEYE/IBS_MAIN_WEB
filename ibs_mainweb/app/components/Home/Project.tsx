"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, CardContent, Typography } from '@mui/material';

const projects = [
  { 
    image: '/images/homeimages/homeimage.jpg', 
    title: 'IT Solutions', 
    category: 'IT',
    link: '/projects/it-solutions' 
  },
  { 
    image: '/images/project2.jpg', 
    title: 'Agribusiness', 
    category: 'Agriculture',
    link: '/projects/agribusiness' 
  },
  { 
    image: '/images/project3.jpg', 
    title: 'Web Development', 
    category: 'IT',
    link: '/projects/web-development' 
  },
  { 
    image: '/images/project4.jpg', 
    title: 'Crop Science', 
    category: 'Agriculture',
    link: '/projects/crop-science' 
  },
  { 
    image: '/images/project5.jpg', 
    title: 'Network Solutions', 
    category: 'IT',
    link: '/projects/network-solutions' 
  },
  { 
    image: '/images/project6.jpg', 
    title: 'Agri-Tech', 
    category: 'Agriculture',
    link: '/projects/agri-tech' 
  },
];

const companyLogos = [
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
  '/images/logo1.jpg',
];

const OurProject = () => {
  const router = useRouter();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 3) % projects.length);
    }, 2000);

    return () => {
      clearInterval(projectInterval);
    };
  }, []);

  const handleProjectDotClick = (index) => {
    setCurrentProjectIndex(index * 3);
  };

  const renderProjectDots = () => {
    const dots = [];
    for (let i = 0; i < Math.ceil(projects.length / 3); i++) {
      dots.push(
        <span
          key={i}
          className={`mx-2 cursor-pointer ${currentProjectIndex / 3 === i ? 'text-blue-500' : 'text-gray-400'}`}
          onClick={() => handleProjectDotClick(i)}
        >
          •
        </span>
      );
    }
    return dots;
  };

  return (
    <div className='flex flex-col pb-20'>
      <div className="flex flex-col bg-gray-500 h-full py-20 items-center">
        <div className='container px-5 flex flex-col pb-16 font-bold w-full justify-start text-start'>
          <div className='bg-[#0a0229] hover:bg-[#ec2525] rounded-full flex items-center justify-center w-48 h-10 text-white'>
            S&BI COMPANY
          </div>
          <div className='text-[#0a0229] py-6 text-xl'>
            How Professional <br /> Services Can Drive 
            <div className='text-[#ec2525]'>
              Success
            </div>
          </div>
        </div>

        <div className="container px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.slice(currentProjectIndex, currentProjectIndex + 3).map((project, index) => (
            <Card
              key={index}
              className="bg-white transition-transform transform hover:scale-105 text-[#0a0229] cursor-pointer"
              onClick={() => router.push(project.link)}
            >
              <CardContent className="p-0 h-full">
                <div className="flex justify-center h-96 w-full">
                  <img src={project.image} alt={project.title} className="object-cover h-full w-full brightness-100" />
                </div>
                <div className="text-center bg-[#0a0229] h-full hover:bg-[#ec2525] w-full">
                  <div className="p-2">
                    <Typography variant="h5" component="div" className="text-white py-5">
                      {project.title}
                    </Typography>
                    <Button className="hover:text-white hover:bg-[#0a0229] font-bold bg-white w-40">
                      {project.category}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='pt-10 flex justify-center'>
          {renderProjectDots()}
        </div>
      </div>

      <div className="py-20 text-center justify-center">
        {/* <div className=""> */}
          <h2 className="text-center justify-center text-xl text">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8  sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                alt={`Company Logo ${index + 1}`}
                src={logo}
                className="col-span-1 max-h-32 w-full object-contain"
              />
            ))}
          </div>
        {/* </div> */}
      </div>

    </div>
  );
};

export default OurProject;
