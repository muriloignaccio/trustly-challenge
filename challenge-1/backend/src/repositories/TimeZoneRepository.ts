import { api } from "../services/api";

export interface TimeZone {
  timeZoneName: string;
  timeZoneAbbreviation: string;
}

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

  const { currentDateTime, utcOffset, dayOfTheWeek, timeZoneName } = data;

  const timeZone = { currentDateTime, utcOffset, dayOfTheWeek, timeZoneName };

  return timeZone;
}