import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, ActionIcon } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';
import { isMobile } from 'react-device-detect';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Layout({ toggleColorScheme, colorScheme }) {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'projects', 'skills', 'blogs'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('about');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Container
      size="xl"
      px={isMobile ? "xs" : "md"}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: isMobile ? '60px' : '20px',
      }}
    >
      <ActionIcon
        variant="outline"
        color={colorScheme === 'dark' ? 'white' : '#248277'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}
      >
        {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </ActionIcon>
      
      {isMobile ? (
        <>
          <Box style={{ width: '100%', marginBottom: '50px' }}>
            <LeftSection activeSection={activeSection} setActiveSection={setActiveSection} />
          </Box>
          <Box style={{ width: '100%' }}>
            <RightSection sectionRefs={sectionRefs} />
          </Box>
        </>
      ) : (
        <Box
          style={{
            width: '100%',
            maxWidth: '1100px',
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            gap: '80px',
            paddingTop: '120px',
            paddingBottom: '20px',
            alignItems: 'start',
          }}
        >
          <Box
            style={{
              position: 'fixed',
              top: '140px',
              width: 'calc(40% - 50px)',
              maxWidth: 'calc((1100px * 0.40) - 50px)',
              height: 'fit-content',
              paddingRight: '40px',
            }}
          >
            <LeftSection activeSection={activeSection} setActiveSection={setActiveSection} />
          </Box>
          <Box style={{ gridColumn: 2 }}>
            <RightSection sectionRefs={sectionRefs} />
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default Layout;