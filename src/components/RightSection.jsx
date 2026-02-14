import React from 'react';
import { Box, Divider } from '@mantine/core';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blogs from './Blogs';
import Education from './Education';

function RightSection({ sectionRefs }) {
  const dividerStyle = { 
    borderTop: '2px dashed #10b981',
    opacity: 0.25,
    margin: '2rem 0'
  };
  
  const sectionStyle = {
    paddingBottom: '2rem'
  };

    const aboutSectionStyle = {
    paddingBottom: '1rem'
  };
  
  return (
    <Box>
      <div id="about" ref={(el) => (sectionRefs.current['about'] = el)} style={aboutSectionStyle}>
        <About />
      </div>
      <Divider style={dividerStyle} />
      <div id="experience" ref={(el) => (sectionRefs.current['experience'] = el)} style={sectionStyle}>
        <Experience />
      </div>
      <Divider style={dividerStyle} />
      <div id="education" ref={(el) => (sectionRefs.current['education'] = el)} style={sectionStyle}>
        <Education />
      </div>
      <Divider style={dividerStyle} />
      <div id="projects" ref={(el) => (sectionRefs.current['projects'] = el)} style={sectionStyle}>
        <Projects />
      </div>
      <Divider style={dividerStyle} />
      <div id="blogs" ref={(el) => (sectionRefs.current['blogs'] = el)} style={sectionStyle}>
        <Blogs />
      </div>
    </Box>
  );
}

export default RightSection;