import { Box, Text } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const SideDrawer = () => {
  return (
    <Box w={225} bgColor="gray" padding={2} h="100vh">
      <Text margin={6}>Welcome to Ensemble Block</Text>
      <Box margin={3}>
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default SideDrawer;
