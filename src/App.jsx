import { Box } from '@chakra-ui/react';
import { LeftText } from './components/LeftText';
import { Control } from './components/Control';
import bgDesktop from './assets/bg-intro-desktop.png';

function App() {

  return (
    <Box p={8} display="flex" h="100vh" alignItems="center" justifyContent="space-around" bgColor="red.400" bgImage={bgDesktop}>
      <LeftText />
      <Control />
    </Box>
  )
}

export default App
