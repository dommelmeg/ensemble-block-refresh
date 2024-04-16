import { Avatar, Box, Flex, Input, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="space-between"
      // gridGap={2}
      bgColor="blue.900"
      padding={2}
    >
      <Box marginLeft={6}>
        <Text>Ensemble Block</Text>
      </Box>

      <Box>
        <Input
          width={399}
          size="sm"
          placeholder="Search for classes, teachers, skills"
        />
        <Avatar marginLeft={6} marginRight={6} name="Megan Story" size="sm" />
      </Box>
    </Flex>
  );
};

export default Header;
