import { RaceNames } from "../types/race";
import { RaceData } from "./../data/raceData";

export const getAccessDisplay = (race: RaceNames): string => {
	const { majorAccess, specialtyAccess, minorAccess, accessPicks } = RaceData[race];
	const majorAccessStrings = majorAccess.map((access) => `Major ${access}`).join(", ");
	const specialtyAccessStrings = specialtyAccess.map((access) => `Specialty ${access}`).join(", ");
	const minorAccessStrings = minorAccess.map((access) => `Minor ${access}`).join(", ");
	return `${[majorAccessStrings, specialtyAccessStrings, minorAccessStrings].filter(Boolean).join(", ")}${
		accessPicks && `, +${accessPicks} Access Points`
	}`;
};
