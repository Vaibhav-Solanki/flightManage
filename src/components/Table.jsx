import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
export default function Tab() {
  const flight = useSelector((el) => el.flight);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Airline On routes</TableCaption>
        <Thead>
          <Tr>
            <Th>Airline name</Th>
            <Th>Routes</Th>
            <Th>Time</Th>
            <Th isNumeric>capacity</Th>
            <Th isNumeric>cost</Th>
          </Tr>
        </Thead>
        <Tbody>
          {flight.map(
            (
              { Airline, stRout, enRout, stTime, enTime, capacity, cost },
              key
            ) => (
              <Tr key={key}>
                <Td>{Airline}</Td>
                <Td>{`${stRout} To ${enRout}`}</Td>
                <Td>{`${stTime} To ${enTime}`}</Td>
                <Td isNumeric>{capacity}</Td>
                <Td isNumeric>{cost}</Td>
              </Tr>
            )
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Airline name</Th>
            <Th>Routes</Th>
            <Th>Time</Th>
            <Th isNumeric>capacity</Th>
            <Th isNumeric>cost</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
