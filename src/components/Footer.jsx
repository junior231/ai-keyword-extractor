import { Box, Image, Text, Flex } from "@chakra-ui/react";
import AiLogo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box mt={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={AiLogo} alt="open AI logo" marginRight={1} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
