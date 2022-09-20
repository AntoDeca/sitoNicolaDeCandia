import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import SlideShow from '../../components/SlideShow';
import HeroComponent from './HeroComponent';
import './index.css';
import SkillsComponent from './SkillsComponent';
function HomePage() {
  const { ref: heroRef, inView: heroVisible } = useInView();
  const { ref: skillsRef, inView: skillsVisibile } = useInView();
  return (
    <>
      <section className='slider-section'>
        <SlideShow />
      </section>
      <section
        className={`hero-section ${
          heroVisible === true ? '' : 'section-hidden'
        }`}
        ref={heroRef}
      >
        <HeroComponent />
      </section>
      <section
        className={`skills-section ${
          skillsVisibile === true ? '' : 'section-hidden'
        }`}
        ref={skillsRef}
      >
        <SkillsComponent />
      </section>
    </>
  );
}

export default HomePage;
