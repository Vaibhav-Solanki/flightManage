import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Routes() {
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
      await axios.post("https://jsmasai.herokuapp.com/routes", first);
      let resRout = await axios.get("https://jsmasai.herokuapp.com/routes");
      dispatch({ type: "loadRoutes", payload: resRout.data });
      toast({
        title: "Route has been added.",
        description: "We've added new Route.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
        <FormControl id="place" isRequired>
          <FormLabel>AirPort name</FormLabel>
          <Input
            placeholder="AirPort"
            _placeholder={{ color: "gray.500" }}
            type="text"
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
