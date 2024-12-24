import React from 'react';
import image from './assets/samsung.png';

const Project = () => {
  return (
    <div className="projects">
      <div className="bg-about p-6 md:p-24">
        <h2 className="text-3xl md:text-5xl inline-block">Some of My Work</h2>
        <span className="block my-4 md:my-8 w-12 md:w-24 h-0.5 bg-span mb-10 md:mb-20"></span>
        <div className="flex flex-col items-center">
          <div className="w-full mb-4 md:mb-8">
            <img src={image} alt="Samsung" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <div><h3 className="text-xl md:text-2xl my-2 md:my-4 font-bold">SAMSUNG</h3></div>
              <div className="flex gap-2 md:gap-4">
                <p href="https://samsung-swart.vercel.app/" target="_blank" className="btn text-btn py-1 px-2 md:py-2 md:px-4 border-2 border-btn rounded transition-transform duration-400 ease-custom opacity-80 hover:scale-110 hover:opacity-100 flex items-center text-contact cursor-pointer">DEMO</p>
                <p href="https://github.com/ashu-0511/Samsung-clone" target="_blank" className="btn text-btn py-1 px-2 md:py-2 md:px-4 border-2 border-btn rounded transition-transform duration-400 ease-custom opacity-80 hover:scale-110 hover:opacity-100 flex items-center text-contact cursor-pointer">CODE</p>
              </div>
            </div>
            <p className="text-base md:text-lg leading-relaxed mt-2 md:mt-4">
              Developed a Samsung clone showcasing skills, experience, and projects with
              Responsive design to adapt to various devices and interactive elements using JavaScript.
            </p>
            <div className="techstack flex gap-2 md:gap-3 mt-3 md:mt-5">
              <p className="bg-techstack text-tech p-1 rounded-md text-xs flex items-center">HTML</p>
              <p className="bg-techstack text-tech p-1 rounded-md text-xs flex items-center">CSS</p>
              <p className="bg-techstack text-tech p-1 rounded-md text-xs flex items-center">JAVASCRIPT</p>
              <p className="bg-techstack text-tech p-1 rounded-md text-xs flex items-center">BOOTSTRAP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
