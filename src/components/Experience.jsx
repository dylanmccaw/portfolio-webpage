import React from 'react';
import { experiences } from '../data/experiences'
import { Title, Text, Badge, Anchor, Box, Stack, Group, Divider } from '@mantine/core';

function Experience() {
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
        Experience
      </Title>

      <Stack gap={64}>
        {experiences.map((experience, index) => (
          <Box key={index}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
              <Box>
                <Text
                  size="lg"
                  weight={600}
                  style={{ lineHeight: 1.4 }}
                >
                  {experience.title}
                </Text>
                <Anchor
                  href={experience.companyLink}
                  target="_blank"
                  style={{
                    color: '#10b981',
                    fontWeight: 500,
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  sx={{
                    '&:hover': {
                      opacity: 0.7,
                      textDecoration: 'underline',
                    }
                  }}
                >
                  {experience.company} →
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
                {experience.period}
              </Text>
            </Box>

            <Stack gap={60} style={{ borderLeft: '2px solid #10b98133', paddingLeft: '24px' }}>
              {experience.projects.map((proj, projIndex) => (
                <Box key={projIndex}>
                  <Stack gap="md">
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Text
                        size="md"
                        weight={600}
                        style={{ lineHeight: 1.4, fontStyle: 'italic' }}
                      >
                        {proj.project}
                      </Text>

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
                        {proj.period}
                      </Text>
                    </Box>

                    <Text
                      size="sm"
                      color="dimmed"
                      style={{
                        lineHeight: 1.6,
                      }}
                    >
                      {proj.description}
                    </Text>

                    <Group gap="xs">
                      {proj.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          size="md"
                          radius="sm"
                          style={{
                            textTransform: 'none',
                            fontWeight: 500,
                            backgroundColor: '#10b98133',
                            color: '#10b981',
                            border: 'none'
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Box>
              ))}
            </Stack>

            {index < experiences.length - 1 && (
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

export default Experience;
