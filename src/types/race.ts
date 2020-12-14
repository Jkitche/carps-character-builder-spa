import { AccessRank } from "./accessRank";
import { AccessElement } from "./element";

export enum RaceNames {
	ALLERIAN = "Allerian (Human)",
	AVYANA = "Avyana",
	BARBARIAN = "Barbarian",
	DWARF = "Dwarf",
	EFREET = "Efreet",
	FIRE_ELF = "Fire Elf",
	FIREWALKER = "Firewalker Ga'Vin",
	FORESTWALKER = "Forestwalker Ga'Vin",
	GNOME = "Gnome",
	GUTHRIE = "Guthrie",
	HIGH_ELF = "High Elf",
	HUMAN = "Human",
	CORSAIR = "Islander (Corsair) Human",
	LORECRAFTER = "Lorecrafter Dwarf",
	ORC = "Orc",
	SYLVANI = "Sylvani",
	VALKENVI = "Valken'Vi",
	WOOD_ELF = "Wood Elf",
}

export interface RaceAccess {
	rank: AccessRank;
	element: AccessElement;
}

export interface Race {
	majorAccess: AccessElement[];
	specialtyAccess: AccessElement[];
	minorAccess: AccessElement[];
	accessPicks: number;
	costumingRequirements: string;
	recommendedCostuming: string;
	description: string;
}
