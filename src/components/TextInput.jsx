import { useState } from "react";
import { Textarea, Button, useToast, Box } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text Field is empty.",
        description: "Please enter some text to extract keywords.",
        status: "error",
        duration: 5000,
        isClosable,
      });
    } else {
      extractKeywords(text);
      setText("");
    }
  };

  return (
    <>
      <Textarea
        bg="green.400"
        color="white"
        padding={4}
        marginTop={6}
        height="auto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="green.500"
        color="white"
        mt={4}
        w="100%"
        _hover={{ bg: "green.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
