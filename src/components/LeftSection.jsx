import React from 'react';
import { Box, Title, Text, List, Anchor, Stack } from '@mantine/core';
import { BrandGithub, BrandLinkedin, MapPin, Mail } from 'tabler-icons-react';
import Typewriter from 'typewriter-effect';
import { LINKEDIN_URL, GITHUB_URL } from '../data/socialmedia';

function LeftSection({ activeSection, setActiveSection }) {
  const sections = ['about', 'experience', 'education', 'projects', 'skills', 'blogs'];
  const highlightStyle = { color: '#10b981be', fontWeight:'bold' };
  
  const handleSectionClick = (section) => {
    // Immediately update the active section
    setActiveSection(section);
    
    if (section === 'about') {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -40;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };
  
  const ContactItem = ({ icon: Icon, children, href }) => (
    <Box style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Icon style={highlightStyle} size={16} />
      {href ? (
        <Anchor 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
          className="contact-link"
        >
          {children}
        </Anchor>
      ) : (
        <Text size="sm">{children}</Text>
      )}
    </Box>
  );
  
  return (
    <Box>
      <Title order={1} style={{ fontFamily: 'Space Mono', marginBottom: '8px' }}>
        Dylan McCaw
      </Title>
      
      <Box mb="xl" style={{ paddingTop:'10px', minHeight: '45px' }}>
        <Text size="lg" weight={500}>
          <Typewriter
            options={{
              strings: ['Software Engineer'],
              autoStart: true,
              loop: true,
              pauseFor: 5000,
            }}
          />
        </Text>
      </Box>
      
      <Stack spacing="xs" mb="xl">
        <ContactItem icon={MapPin}>Falkirk, Scotland</ContactItem>
        <ContactItem icon={BrandGithub} href={GITHUB_URL}>
          github.com/dylanmccaw
        </ContactItem>
        <ContactItem icon={BrandLinkedin} href={LINKEDIN_URL}>
          linkedin.com/in/dylan-mccaw
        </ContactItem>
        <ContactItem icon={Mail} href="mailto:me@dylan.software">
          me@dylan.software
        </ContactItem>
      </Stack>
      
      <Box component="nav">
        {sections.map((section) => (
          <Box
            key={section}
            onClick={() => handleSectionClick(section)}
            className="section-item"
            style={{
              color: activeSection === section ? '#10b981be' : 'inherit',
              fontWeight: activeSection === section ? 'bold' : 'normal',
              cursor: 'pointer',
              padding: '8px 0',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span 
              style={{ 
                opacity: activeSection === section ? 1 : 0.5,
                transition: 'all 0.3s ease',
                display: 'inline-block',
                width: activeSection === section ? '32px' : '12px',
              }}
            >
              {activeSection === section ? '———' : '—'}
            </span>
            <span className="section-text">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </Box>
        ))}
      </Box>
      
      <style jsx>{`
        .contact-link:hover {
          text-decoration: underline;
        }
        .section-item:hover .section-text {
          font-size: 1.05em;
          transform: translateX(4px);
        }
        .section-text {
          transition: all 0.2s ease;
          display: inline-block;
        }
      `}</style>
    </Box>
  );
}

export default LeftSection;