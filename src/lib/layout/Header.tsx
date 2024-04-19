import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

const Header = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      <Box>
        <HStack>
          <Button
            variant="ghost"
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          >
            <BiMenu />
          </Button>
          <Text>Ensemble Block</Text>
        </HStack>
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
