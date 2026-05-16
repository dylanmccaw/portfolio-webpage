import { Box, Title, Text, Anchor, Stack } from '@mantine/core';
import { BrandGithub, BrandLinkedin, MapPin, Mail } from 'tabler-icons-react';
import { LINKEDIN_URL, GITHUB_URL } from '../data/socialmedia';

function LeftSection({ activeSection, setActiveSection }) {
  const sections = ['about', 'experience', 'education'];
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
      <Title order={1} style={{ fontFamily: 'Space Mono', marginBottom: '4px' }}>
        Dylan McCaw
      </Title>

      <Text size="lg" weight={500} style={{ paddingTop: '6px', marginBottom: '24px', color: '#10b981be' }}>
        Software Engineer
      </Text>

      <Stack spacing="xs" mb="xl">
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
      </Stack>

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
        .section-item:hover {
          opacity: 1 !important;
          color: #10b981 !important;
        }
      `}</style>
    </Box>
  );
}

export default LeftSection;
