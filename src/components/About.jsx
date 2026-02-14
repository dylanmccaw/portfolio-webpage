import { Text } from '@mantine/core';

const highlightStyle = { 
  fontWeight: 'bold',
  borderBottom: '2px dashed #10b9818f',
  paddingBottom: '2px',
  display: 'inline-block',
  lineHeight: '1.5'
};

function About() {
  return (
    <>
      <Text mb="md">
        <span style={highlightStyle}>Full Stack Software Engineer</span> with{' '}
        <span style={highlightStyle}>7+ years</span> delivering secure, high-availability systems for mission-critical environments.
        <br /><br />
        Specialised in <span style={highlightStyle}>C#/.NET</span> and{' '}
        <span style={highlightStyle}>Azure</span> cloud architectures, with{' '}
        <span style={highlightStyle}>React</span> front-end experience.
      </Text>
    </>
  );
}

export default About;