import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <section className="app_header">
      <Flex bg='Black'>
        <Box p="6" color="white">
          <Text fontSize="2.5em">Awari</Text>
        </Box>
        <Spacer />
        <Box p="8" color="white">
          <Text fontSize="1.5em">Cursos</Text>
        </Box>
        <Box p="8" color="white">
          <Text fontSize="1.5em">Mentores</Text>
        </Box>
      </Flex>
    </section>
  );
}
export default Header;
