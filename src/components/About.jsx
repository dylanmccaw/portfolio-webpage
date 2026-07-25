import { Text } from '@mantine/core';

const highlightStyle = {
  fontWeight: 'bold',
  color: '#10b981',
};

function About() {
  return (
    <>
      <Text mb="md">
        <span style={highlightStyle}>Full Stack Software Engineer</span> with{' '}
        <span style={highlightStyle}>8+ years</span> delivering secure, high-availability systems for mission-critical environments, holding a{' '}
        <span style={highlightStyle}>First-Class BSc in Software Development</span>.
        <br /><br />
        Specialised in <span style={highlightStyle}>C#/.NET</span> and{' '}
        <span style={highlightStyle}>Azure</span> cloud architectures, with{' '}
        <span style={highlightStyle}>React</span> front-end experience and{' '}
        <span style={highlightStyle}>AI</span> experience building with{' '}
        <span style={highlightStyle}>RAG</span> and{' '}
        <span style={highlightStyle}>MCP</span>, and a keen interest in{' '}
        <span style={highlightStyle}>DevOps</span> practices.
      </Text>
    </>
  );
}

export default About;