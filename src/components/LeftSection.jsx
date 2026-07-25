import { Box, Title, Text, Anchor } from '@mantine/core';
import { BrandGithub, BrandLinkedin, MapPin, Mail } from 'tabler-icons-react';
import { LINKEDIN_URL, GITHUB_URL } from '../data/socialmedia';

function LeftSection({ activeSection, setActiveSection }) {
  const sections = ['about', 'experience', 'projects', 'education'];
  const highlightStyle = { color: '#10b981be', fontWeight:'bold' };

  const handleSectionClick = (section) => {
    setActiveSection(section);

    if (section === 'about') {
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

  const chipStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '5px 10px',
    borderRadius: '6px',
    backgroundColor: '#10b98118',
    border: '1px solid #10b98133',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  };

  const ContactItem = ({ icon: Icon, children, href }) => (
    <Box style={chipStyle} className="contact-chip">
      <Icon style={{ color: '#10b981be' }} size={13} />
      {href ? (
        <Anchor
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none', fontSize: '12.5px' }}
          className="contact-link"
        >
          {children}
        </Anchor>
      ) : (
        <Text size="xs" style={{ fontSize: '12.5px' }}>{children}</Text>
      )}
    </Box>
  );

  return (
    <Box>
      <Title order={1} style={{ fontFamily: 'Space Mono', marginBottom: '4px' }}>
        Dylan McCaw
      </Title>

      <Text size="lg" weight={500} style={{ paddingTop: '6px', marginBottom: '24px', color: '#10b981be' }}>
        Software Engineer
      </Text>

      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
        <ContactItem icon={MapPin}>Falkirk, Scotland</ContactItem>
        <ContactItem icon={BrandGithub} href={GITHUB_URL}>
          github/dylanmccaw
        </ContactItem>
        <ContactItem icon={BrandLinkedin} href={LINKEDIN_URL}>
          linkedin/dylanmccaw
        </ContactItem>
        <ContactItem icon={Mail} href="mailto:me@dylan.software">
          me@dylan.software
        </ContactItem>
      </Box>

      <Box component="nav">
        {sections.map((section) => (
          <Box
            key={section}
            onClick={() => handleSectionClick(section)}
            className="section-item"
            style={{
              color: activeSection === section ? '#10b981' : 'inherit',
              fontWeight: activeSection === section ? 'bold' : 'normal',
              cursor: 'pointer',
              padding: '8px 0',
              transition: 'color 0.2s ease, opacity 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              opacity: activeSection === section ? 1 : 0.6,
            }}
          >
            <span
              style={{
                transition: 'width 0.3s ease, opacity 0.3s ease',
                display: 'inline-block',
                width: activeSection === section ? '32px' : '12px',
                opacity: activeSection === section ? 1 : 0.5,
              }}
            >
              {activeSection === section ? '———' : '—'}
            </span>
            <span>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </Box>
        ))}
      </Box>

      <style jsx>{`
        .contact-link:hover {
          text-decoration: underline;
        }
        .contact-chip:hover {
          background-color: #10b98130 !important;
          border-color: #10b98166 !important;
        }
        .section-item:hover {
          opacity: 1 !important;
          color: #10b981 !important;
        }
      `}</style>
    </Box>
  );
}

export default LeftSection;
