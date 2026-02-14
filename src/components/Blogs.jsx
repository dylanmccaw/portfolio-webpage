import React from 'react';
import { blogs } from '../data/blogs'
import { Title, List, Text } from '@mantine/core';

function Blogs() {
  return (
    <>
      <Title style={{color:"#10b981be", paddingBottom:"30px", fontFamily:'Space Mono'}} order={2}>Blogs</Title>
      {blogs.length > 0 ? (
        <List spacing="md">
          {blogs.map((blog, index) => (
            <List.Item key={index}>
              <Text weight={700}>{blog.title}</Text>
              <Text size="sm" color="dimmed">{blog.date}</Text>
            </List.Item>
          ))}
        </List>
      ) : (
        <Text color="dimmed">Coming soon...</Text>
      )}
    </>
  );
}

export default Blogs;
