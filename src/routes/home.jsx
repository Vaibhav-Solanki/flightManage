import {
  Button,
  Text,
  FormControl,
  Spacer,
  Flex,
  Center,
  useColorModeValue,
  useBreakpointValue,
  Select,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Table from "../components/Table";
import { useSelector } from "react-redux";
export default function home() {
  const [first, setfirst] = useState({});
  const HandleIn = (e) => {
    const { id, value } = e.target;
    setfirst({ ...first, [id]: value });
  };
  const routes = useSelector((el) => el.roots);
  return (
    <>
      <Flex my={4}>
        <Spacer />
        <Center>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            onClick={() => naviget("/")}
          >
            AirLIne
          </Text>
        </Center>
        <Spacer />
        <FormControl id="stRout" isRequired w={"25%"}>
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
        <FormControl id="enRout" isRequired w={"25%"}>
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
        <Spacer />
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Search
        </Button>
        <Spacer />
      </Flex>
      <Table />
    </>
  );
}
