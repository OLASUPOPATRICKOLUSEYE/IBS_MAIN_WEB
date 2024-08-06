"use client";
import React from 'react';
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

const OurProject = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-full py-20 flex flex-col items-center">
      <div className='container px-5 flex flex-col pb-16 font-bold w-full justify-start text-start'>
        <div className='bg-[#0a0229] hover:bg-[#ec2525] rounded-full flex items-center justify-center w-48 h-10 text-white'>
          IBS COMPANY
        </div>
        <div className='text-[#0a0229] py-6 text-xl'>
          How Professional IT/Agribusiness <br /> Services Can Drive 
          <div className='text-[#ec2525]'>
            Success
          </div>
        </div>
      </div>

      <div className="container px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white transition-transform transform hover:scale-105 text-[#0a0229] cursor-pointer"
            onClick={() => router.push(project.link)}
          >
            <CardContent className="p-0 h-full">
              <div className="flex justify-center h-96 w-full">
                <img src={project.image} alt={project.title} className="object-cover h-full w-full brightness-100" />
              </div>
              <div className="text-center bg-[#0a0229] h-full hover:bg-[#ec2525] w-full ">
                <div className="p-2">
                  <Typography variant="h5" component="div" className="text-white py-5">
                    {project.title}
                  </Typography>
                <Button  className="hover:text-white hover:bg-[#0a0229] font-bold bg-white w-40">
                  {project.category}
                </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="container w-full mx-auto rounded-b-full bg-[#ec2525] h-full py-20 flex flex-col items-center">
                {/* 10 companies logo here. three on a row. */}
        </div>
    </div>
  );
};

export default OurProject;
