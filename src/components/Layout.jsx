import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, ActionIcon } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';
import { isMobile } from 'react-device-detect';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Layout({ toggleColorScheme, colorScheme }) {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});
  
  const GAP = 200;
  const HALF_GAP = GAP / 2;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'projects', 'skills', 'blogs'];
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier

      // Find the section that is currently in view
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

      // Handle the case when at the very top
      if (window.scrollY < 100) {
        setActiveSection('about');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial state
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
          <Box
            style={{
              width: '100%',
              marginBottom: '50px',
            }}
          >
            <LeftSection activeSection={activeSection} setActiveSection={setActiveSection} />
          </Box>
          <Box
            style={{
              width: '100%',
            }}
          >
            <RightSection sectionRefs={sectionRefs} />
          </Box>
        </>
      ) : (
        <Box
          style={{
            width: '100%',
            maxWidth: '1300px',
            display: 'flex',
            justifyContent: 'center',
            gap: `${GAP}px`,
            paddingTop: '180px',
            paddingBottom: '20px',
          }}
        >
          <Box
            style={{
              flex: '1 1 0',
              maxWidth: '600px',
              position: 'fixed',
              right: `calc(50% + ${HALF_GAP}px)`,
              height: 'fit-content',
            }}
          >
            <LeftSection activeSection={activeSection} setActiveSection={setActiveSection} />
          </Box>
          <Box
            style={{
              flex: '1 1 0',
              maxWidth: '600px',
              marginLeft: `calc(50% + ${HALF_GAP}px)`,
            }}
          >
            <RightSection sectionRefs={sectionRefs} />
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default Layout;