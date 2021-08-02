import { api } from "../services/api";
import { TimeZone } from "../types";

export async function getAllTimeZones() {
  const { data } = await api.get('/timezone');

  const timeZones: TimeZone[] = data.map((timezone) => {
    const [timeZoneName] = timezone.split(',');

    const timeZoneAbbreviation = timeZoneName.replace(/[^A-Z]/g, '');

    return { timeZoneName, timeZoneAbbreviation };
  })

  return timeZones;
};

export async function getTimeZoneByAbbreviation(abbreviation: string) {
  const { data } = await api.get(`/json/${abbreviation}/now`);

  const { currentDateTime, utcOffset, dayOfTheWeek } = data;

  const timeZone = { currentDateTime, utcOffset, dayOfTheWeek };

  return timeZone;
}