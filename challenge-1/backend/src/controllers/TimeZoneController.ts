import {
  getAllTimeZones,
  getTimeZoneByAbbreviation,
} from "../repositories/TimezoneRepository";

export async function index(req, res) {
  try {
    const timeZones = await getAllTimeZones();

    return res.status(200).json(timeZones);
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error.message}` });
  }
}

export async function show(req, res) {
  const { abbreviation } = req.params;

  try {
    const timeZone = await getTimeZoneByAbbreviation(abbreviation);

    return res.status(200).json(timeZone);
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error.message}` });
  }
}