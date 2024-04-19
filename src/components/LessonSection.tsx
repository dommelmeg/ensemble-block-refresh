import { Divider, Flex, Text } from '@chakra-ui/react';
import LessonSectionHeader from './LessonSectionHeader';

const LessonSection = ({ title }: any) => {
  return (
    <Flex p={68} direction="column" w={1045}>
      <LessonSectionHeader title={title} />
      <Divider mt={2} />
      <Text mt={2}>Carousel here!</Text>
    </Flex>
  );
};

export default LessonSection;
