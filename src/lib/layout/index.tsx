import { Box, Flex } from '@chakra-ui/react';
import type { ReactElement } from 'react';
import { useState } from 'react';

import Header from './Header';

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

export default Layout;
