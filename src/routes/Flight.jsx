import {
  Button,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
export default function flightEdit() {
  const routes = useSelector((el) => el.roots);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Airline Add
        </Heading>
        <FormControl id="Airline" isRequired>
          <FormLabel>Airline name</FormLabel>
          <Input
            placeholder="Airline name"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <Flex>
          <FormControl id="start airport" isRequired>
            <FormLabel>start airport</FormLabel>
            <Select
              placeholder="start airport"
              _placeholder={{ color: "gray.500" }}
            >
              {routes.map(({ place, _id }) => (
                <option value={_id} key={_id}>
                  {place}
                </option>
              ))}
            </Select>
          </FormControl>
          <Spacer />
          <FormControl id="end airport" isRequired>
            <FormLabel>end airport</FormLabel>
            <Select
              placeholder="end airport"
              _placeholder={{ color: "gray.500" }}
            >
              {routes.map(({ place, _id }) => (
                <option value={_id} key={_id}>
                  {place}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
        <FormControl id="cost" isRequired>
          <FormLabel>cost</FormLabel>
          <Input
            placeholder="cost"
            _placeholder={{ color: "gray.500" }}
            type="number"
          />
        </FormControl>
        <Flex>
          <FormControl id="start time" isRequired>
            <FormLabel>start time</FormLabel>
            <Input
              placeholder="start time"
              _placeholder={{ color: "gray.500" }}
              type="number"
            />
          </FormControl>
          <FormControl id="End-time" isRequired>
            <FormLabel>End-time</FormLabel>
            <Input
              placeholder="End-time"
              _placeholder={{ color: "gray.500" }}
              type="number"
            />
          </FormControl>
        </Flex>
        <FormControl id="Capacity" isRequired>
          <FormLabel>Capacity</FormLabel>
          <Input
            placeholder="Capacity"
            _placeholder={{ color: "gray.500" }}
            type="number"
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
