import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaCode, FaWrench, FaLightbulb } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiReact } from 'react-icons/si';
import { SiFigma, SiGithub } from 'react-icons/si';

const Skills = () => {

  const [hover, setHover] = useState(false);

  return (
    <>
      <section className=" skills bg-about text-white py-16 px-6 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-normal">Skills</h2>
          <span className=' block my-8 w-24 h-0.5 bg-span'></span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Development Section */}
            <div>
              <div className="flex items-center mb-6">
                <FaCode className="text-4xl mr-4" />
                <h3 className="text-2xl font-semibold">Development</h3>
              </div>
              <div className="grid grid-cols-3 gap-6 w-fit">
                {[{ icon: SiHtml5, label: 'HTML5' }, { icon: SiCss3, label: 'CSS3' }, { icon: SiJavascript, label: 'JavaScript' }, { icon: SiTailwindcss, label: 'Tailwind' }, { icon: SiReact, label: 'React' }].map(skill => (
                  <div key={skill.label} className="flex flex-col items-center justify-center bg-gray-800 p-4 ">
                    <skill.icon className="text-3xl mb-2" />
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Design Section */}
            <div>
              <div className="flex items-center mb-6">
                <MdDesignServices className="text-4xl mr-4" />
                <h3 className="text-2xl font-semibold">Design & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-6 ">
                {[{ icon: SiFigma, label: 'Figma' }, { icon: SiGithub, label: 'Github' }].map(tool => (
                  <div key={tool.label} className="flex flex-col items-center justify-center bg-gray-800 p-4 ">
                    <tool.icon className="text-3xl mb-2" />
                    {tool.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='resume'>
        <div
          className="resume-strip"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? <FaDownload className="resume-icon" /> : <span className="resume-text text-base">VIEW MY FULL RESUME</span>}
        </div>
      </section>
    </>
  );
};

export default Skills;
