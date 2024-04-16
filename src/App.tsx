import { Box, ChakraProvider, HStack, Text } from '@chakra-ui/react';

import { theme } from '~/lib/styles/theme';

import Header from './lib/layout/Header';
import SideDrawer from './lib/layout/SideDrawer';

const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <HStack>
      <SideDrawer />
      <Box padding={78}>
        <Text>This is a test...</Text>
        <Text>This is a test...</Text>
      </Box>
    </HStack>
  </ChakraProvider>
);

export default App;
