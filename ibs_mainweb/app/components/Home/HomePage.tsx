import React from 'react';
import Image from 'next/image';
// import OurProfession from './OurProfessions';
// import OurProject from './OurProject';
// import Project from './Project';
import Hero from './Hero';
import Vision from './Vision';


const HomePage: React.FC = () => {


  return (
    <div>
      <Hero />
      <Vision />
      {/* <OurProfession /> */}
      {/* <Project /> */}
      {/* <OurProject /> */}
    </div>
  );
};

export default HomePage;
