import { Box, Text, Flex, Button, Input } from '@chakra-ui/react';

function FileUpload() {
  return (
    <Box width="50%" m="100px auto" padding="2" shadow="base">
      <Flex direction="column" alignItems="center" mb="5">
        <Text fontSize="2xl" mb="4">
          Upload a Document
        </Text>
        <Button size="sm" colorScheme="green">
          Accepted File Types
        </Button>
        <Box mt="10" ml="24">
          <Input type="file" variant="unstyled" />
        </Box>
      </Flex>
    </Box>
  );
}

export default FileUpload;
