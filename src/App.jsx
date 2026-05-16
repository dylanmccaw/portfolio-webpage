import '@mantine/core/styles.css';
import React, { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import Layout from './components/Layout';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark',
  });

  const toggleColorScheme = (value) => {
    const newColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(newColorScheme);
    document.body.classList.toggle('dark', newColorScheme === 'dark');
  };

  useEffect(() => {
    // Initialize body class on component mount
    document.body.classList.toggle('dark', colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <Layout toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} />
    </MantineProvider>
  );
}

export default App;