import React from 'react';
import { education } from '../data/education';
import { Title, Text, Anchor, Box, Stack, Divider } from '@mantine/core';

function Education() {
  return (
    <Box>
      <Title 
        order={2}
        style={{ 
          color: "#10b981be", 
          fontFamily: 'Space Mono',
          marginBottom: '30px',
        }}
      >
        Education
      </Title>
      
      <Stack spacing={64}>
        {education.map((edu, index) => (
          <Box key={index}>
            <Stack spacing="md">
              <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Text 
                    size="lg" 
                    weight={600}
                    style={{ lineHeight: 1.4 }}
                  >
                    {edu.degree}
                  </Text>
                  {edu.honors && (
                    <Text 
                      size="sm" 
                      style={{ 
                        fontStyle: 'italic',
                        color: '#5c5c5c',
                        marginTop: '4px'
                      }}
                    >
                      {edu.honors}
                    </Text>
                  )}
                  <Anchor 
                    href={edu.institutionLink} 
                    target="_blank"
                    style={{ 
                      color: '#10b981',
                      fontWeight: 500,
                      fontSize: '15px',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                      display: 'block',
                      marginTop: '4px'
                    }}
                    sx={{
                      '&:hover': {
                        opacity: 0.7,
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    {edu.institution} →
                  </Anchor>
                </Box>
                
                <Text 
                  size="sm" 
                  weight={500}
                  style={{ 
                    color: '#10b981',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '12px',
                    lineHeight: '1.6',
                    whiteSpace: 'nowrap',
                    marginLeft: '20px',
                  }}
                >
                  {edu.period}
                </Text>
              </Box>
            </Stack>
            
            {index < education.length - 1 && (
              <Divider 
                style={{ 
                  borderTop: '2px dashed #10b981',
                  marginTop: '30px',
                  opacity: 0.2,
                }} 
              />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Education;