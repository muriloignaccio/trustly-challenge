export interface TimeZone {
  timeZoneName: string;
  timeZoneAbbreviation: string;
}

export interface SelectedTimeZone {
  currentDateTime: string;
  utcOffset: string;
  dayOfTheWeek: string;
}
