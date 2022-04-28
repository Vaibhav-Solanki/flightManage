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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function flightEdit() {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setfirst] = useState({});
  const HandleIn = (e) => {
    const { id, value } = e.target;
    setfirst({ ...first, [id]: value });
  };
  const handlePost = async (e) => {
    try {
      await axios.post("https://jsmasai.herokuapp.com/flight", first);
      toast({
        title: "Flight has been added.",
        description: "We've added new Flight.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      let resFlight = await axios.get("https://jsmasai.herokuapp.com/flight");
      dispatch({ type: "loadFlight", payload: resFlight.data });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
            onChange={HandleIn}
          />
        </FormControl>
        <Flex>
          <FormControl id="stRout" isRequired>
            <FormLabel>start airport</FormLabel>
            <Select
              placeholder="start airport"
              _placeholder={{ color: "gray.500" }}
              onChange={HandleIn}
            >
              {routes.map(({ place }, key) => (
                <option value={place} key={key}>
                  {place}
                </option>
              ))}
            </Select>
          </FormControl>
          <Spacer />
          <FormControl id="enRout" isRequired>
            <FormLabel>end airport</FormLabel>
            <Select
              placeholder="end airport"
              _placeholder={{ color: "gray.500" }}
              onChange={HandleIn}
            >
              {routes.map(({ place }, key) => (
                <option value={place} key={key}>
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
            onChange={HandleIn}
          />
        </FormControl>
        <Flex>
          <FormControl id="stTime" isRequired>
            <FormLabel>start time</FormLabel>
            <Input
              placeholder="start time"
              _placeholder={{ color: "gray.500" }}
              type="number"
              onChange={HandleIn}
            />
          </FormControl>
          <FormControl id="enTime" isRequired>
            <FormLabel>End-time</FormLabel>
            <Input
              placeholder="End-time"
              _placeholder={{ color: "gray.500" }}
              type="number"
              onChange={HandleIn}
            />
          </FormControl>
        </Flex>
        <FormControl id="capacity" isRequired>
          <FormLabel>Capacity</FormLabel>
          <Input
            placeholder="Capacity"
            _placeholder={{ color: "gray.500" }}
            type="number"
            onChange={HandleIn}
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
            onClick={() => navigate("/")}
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
            onClick={handlePost}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
