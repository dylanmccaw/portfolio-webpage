import React from 'react';
import { projects } from '../data/projects'
import { Title, Text, SimpleGrid, Badge, ActionIcon } from '@mantine/core';
import { ExternalLink } from 'tabler-icons-react';

function Projects() {
  return (
    <>
      <Title style={{ color: "#10b981be", paddingBottom: "30px", fontFamily: 'Space Mono' }} order={2}>
        Projects
      </Title>
      {projects.length === 0 ? (
        <Text color="dimmed">Coming soon...</Text>
      ) : (
        <SimpleGrid
          cols={1}
          spacing="lg"
          breakpoints={[
            { maxWidth: 'lg', cols: 1, spacing: 'sm' },
          ]}
        >
          {projects.map((project, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }} size="lg"> 
                  {project.title}
                </Text>
                <ActionIcon 
                  color="none" 
                  variant="transparent" 
                  size="lg" 
                  className="icon-hover" 
                  component="a" 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </ActionIcon>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  style={{ paddingTop:"5px", width: '200px', height: 'auto', borderRadius: '8px' }}
                />
                <div style={{ flex: 1 }}>
                  <Text size="sm" color="dimmed" style={{ marginBottom: '15px' }}>
                    {project.description}
                  </Text>
                  <div>
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} color="#10b981" size="sm" style={{ marginRight: '10px', marginBottom: '10px' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default Projects;