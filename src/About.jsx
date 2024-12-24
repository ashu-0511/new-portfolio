import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from './assets/person.png'

function About() {

  AOS.init();
  return (
    <div className="bg-about h-auto p-8 sm:p-16 md:p-24 ">
      <div className="content py-8">
        <p className="text-5xl" data-aos="fade-up">Hey, I'm Ashutosh.</p>
        <p className='sm:w-4/5 md:w-3/5 text-2xl font-medium leading-8 mt-6'>
          I design and code beautifully simple things, and I love what I do.        </p>
        <span className="block my-4 sm:my-6 md:my-8 w-16 sm:w-20 md:w-24 h-0.5 bg-span"></span>

        <div className="about-wrapper pr-0 sm:pr-5 min-h-full flex flex-col sm:flex-row items-center md:gap-20">
          <div className="img mb-4 sm:mb-0">
            <img src={profile} alt="profile" className=' sm:float-none' />
          </div>
          <div className="about-text-wrapper sm:w-2/3 md:w-8/12 md:text-xl inline-block align-top ">
            <p className="mb-3 leading-relaxed">
              I'm a fourth year student at Northeastern University in Boston studying computer science and interaction design.
              I have experience developing and designing software for the web, from simple landing pages to progressive web applications.
              I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.
            </p>
            <p className="mb-3 leading-relaxed">
              I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
              I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as
              I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
            </p>
            <p className="mb-2 leading-relaxed">
              When I'm not in front of a computer screen, I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
