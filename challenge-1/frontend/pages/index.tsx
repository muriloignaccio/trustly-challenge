import Head from "next/head";
import { useState } from "react";

import {
  Container,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { TimeZoneSelect } from "../components/TimeZoneSelect";
import { TimeZoneTable } from "../components/TimeZoneTable";

import { IsTimeZoneEmpty, IsTimeZoneNull } from "../services/utils";
import { SelectedTimeZone } from "../types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    {} as SelectedTimeZone
  );

  return (
    <Container maxW="5xl">
      <Head>
        <title>Home | Trustly</title>
      </Head>

      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Heading my={10}>Trustly Challenge</Heading>

        <TimeZoneSelect
          setSelectedTimeZone={setSelectedTimeZone}
          setIsLoading={setIsLoading}
        />

        {isLoading && <Spinner />}
        {!IsTimeZoneNull(selectedTimeZone) ? (
          <TimeZoneTable timeZoneData={selectedTimeZone} />
        ) : (
          <>
          {/* The renderization bellow happens because not all the abbreviations are found by the API */}
            {IsTimeZoneEmpty(selectedTimeZone) && (
              <Alert mt={5} status="error">
                <AlertIcon />
                <AlertDescription>
                  The Time Zone chosen was not able to be found! Try choosing
                  another one.
                </AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
              </Alert>
            )}
          </>
        )}
      </Flex>
    </Container>
  );
}
