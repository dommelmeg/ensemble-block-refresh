import { Button, Heading, HStack, Tooltip, useToast } from '@chakra-ui/react';
import { BiCopy } from 'react-icons/bi';

const LessonSectionHeader = ({ title }: { title: string }) => {
  const toast = useToast();

  const handleAnchorCopy = () => {
    toast({
      title: `Link to the “${title}” Lessons copied to clipboard`,
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <HStack>
      <Heading>{title}</Heading>
      <Tooltip label="Copy link to clipboard">
        <Button onClick={handleAnchorCopy} variant="ghost" marginLeft={2}>
          <BiCopy />
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default LessonSectionHeader;
