import { Flex } from '@chakra-ui/react';

import LessonSection from '~/components/LessonSection';

const Dashboard = () => {
  return (
    <Flex direction="column">
      <LessonSection title="Welcome to Ensemble Block" />
      <LessonSection title="Demos" />
    </Flex>
  );
};

export default Dashboard;
