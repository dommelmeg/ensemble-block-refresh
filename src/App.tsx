import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '~/lib/styles/theme';

import Layout from './lib/layout';
import Dashboard from './pages/Dashboard';

const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Dashboard />
    </Layout>
  </ChakraProvider>
);

export default App;
