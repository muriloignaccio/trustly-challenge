import moment from "moment";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

import { formatOffset } from "../services/utils";
import { SelectedTimeZone } from "../types";

interface TimeZoneTableProps {
  timeZoneData: SelectedTimeZone;
}

export function TimeZoneTable({ timeZoneData }: TimeZoneTableProps) {
  return (
    <Table mt={5}>
      <Thead>
        <Tr>
          <Th>Current Time</Th>
          <Th>UTC Offset</Th>
          <Th>Day of The week</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{moment(timeZoneData.currentDateTime).format("h:mm A")}</Td>
          <Td>UTC {formatOffset(timeZoneData.utcOffset)}</Td>
          <Td>{timeZoneData.dayOfTheWeek}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
