import React from 'react';
import { AiOutlineCode } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';


const Work = () => {
  return (
    <section className="work">
      <div className="relative bg-work h-auto min-h-full bg-bottom bg-no-repeat bg-cover overflow-hidden">
        <div className="absolute opacity-60 z-20 inset-0 bg-cont"></div>
        <div className="bg-wrapper h-full w-full p-8 sm:p-16 md:p-24 z-30 relative">
          <div className="data">
            <div className="heading py-16">
              <h1 className="text-5xl mb">What I Do</h1>
              <span className="block my-4 sm:my-6 md:my-8 w-16 sm:w-20 md:w-24 h-0.5 bg-span"></span>
              <div className="services w-full mx-auto my-0 p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-20">

                  {/* Web Development */}
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <AiOutlineCode className="text-3xl sm:text-4xl mr-4" />
                      <h3 className="text-xl sm:text-2xl font-semibold">Web Development</h3>
                    </div>
                    <p className="text-sm sm:text-base">
                      Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                    </p>
                  </div>

                  {/* Responsive UI Design */}
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <FiSmartphone className="text-3xl sm:text-4xl mr-4" />
                      <h3 className="text-xl sm:text-2xl font-semibold">Responsive UI Design</h3>
                    </div>
                    <p className="text-sm sm:text-base">
                      "A user interface is like a joke. If you have to explain it, it's not that good." I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.
                    </p>
                  </div>

                  {/* Experience Design */}
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <MdOutlineDesignServices className="text-3xl sm:text-4xl mr-4" />
                      <h3 className="text-xl sm:text-2xl font-semibold">Experience Design</h3>
                    </div>
                    <p className="text-sm sm:text-base">
                      There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product.
                    </p>
                  </div>

                  {/* Diversity in Tech */}
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <MdOutlineDesignServices className="text-3xl sm:text-4xl mr-4" />
                      <h3 className="text-xl sm:text-2xl font-semibold">Diversity in Tech</h3>
                    </div>
                    <p className="text-sm sm:text-base">
                      Beyond coding, I am a strong advocate for diversity in the tech industry, especially for women. I currently serve as President for Northeastern's women in tech club, NUWIT, and was a 2016 Grace Hopper Conference Scholar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
