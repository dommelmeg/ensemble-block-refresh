import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { theme } from '~/lib/styles/theme';

import Header from './lib/layout/Header';
import Dashboard from './pages/Dashboard';

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Header setIsOpen={setIsOpen} />
      <Flex direction="row">
        {isOpen && (
          <Box h="calc(100vh - 56px)" w="225px" bg="grey" p={6}>
            test
          </Box>
        )}
        {children}
      </Flex>
    </Box>
  );
};

const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Dashboard />
    </Layout>
  </ChakraProvider>
);

export default App;
