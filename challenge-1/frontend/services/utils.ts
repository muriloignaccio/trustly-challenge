import { SelectedTimeZone } from "../types";

export function formatOffset(offset: string) {
  const formattedOffset = Number(offset.slice(0, -6));

  return formattedOffset < 0 ? formattedOffset : "+" + formattedOffset;
}

export function IsTimeZoneNull(timeZoneInfo: SelectedTimeZone) {
  return Object.values(timeZoneInfo).every((value) => value === null);
}

export function IsTimeZoneEmpty(timeZoneInfo: SelectedTimeZone) {
  return Object.keys(timeZoneInfo).length !== 0;
}
