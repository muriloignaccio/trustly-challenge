import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";

import { api } from "../services/api";
import { SelectedTimeZone, TimeZone } from "../types";

interface TimeZoneSelectProps {
  setSelectedTimeZone: (timeZoneInfo: SelectedTimeZone) => void;
  setIsLoading: (isBoolean: boolean) => void;
}

export function TimeZoneSelect({
  setSelectedTimeZone,
  setIsLoading,
}: TimeZoneSelectProps) {
  const [timeZoneList, setTimeZoneList] = useState<TimeZone[]>([]);
  const [timeZone, setTimeZone] = useState("default");

  useEffect(() => {
    api.get("/timezones").then(({ data }) => setTimeZoneList(data));
  }, []);

  async function handleSelectChange(timeZoneAbbreviation: string) {
    setTimeZone(timeZoneAbbreviation);
    setIsLoading(true);
    try {
      const { data: timeZoneInfo } = await api.get(
        `/timezones/${timeZoneAbbreviation}`
      );
      setSelectedTimeZone(timeZoneInfo);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Select
      onChange={(e) => handleSelectChange(e.target.value)}
      value={timeZone}
    >
      <option disabled value="default">
        Choose a Time Zone
      </option>
      {timeZoneList.map(({ timeZoneAbbreviation, timeZoneName }) => (
        <option key={Date.now() * Math.random()} value={timeZoneAbbreviation}>
          {timeZoneName}
        </option>
      ))}
    </Select>
  );
}
