import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { AccessElement } from "../../types/element";
import { RaceNames } from "../../types/race";
import { RaceData } from "./../../data/raceData";

interface CharacterState {
	race: RaceNames;
	majorAccess: AccessElement[];
	specialtyAccess: AccessElement[];
	minorAccess: AccessElement[];
}

const initialState: CharacterState = {
	race: RaceNames.ALLERIAN,
	majorAccess: [],
	specialtyAccess: [],
	minorAccess: [],
};

export const characterSlice = createSlice({
	name: "character",
	initialState,
	reducers: {
		selectRace: (state: CharacterState, action: PayloadAction<RaceNames>) => {
			return {
				...state,
				race: action.payload,
				majorAccess: RaceData[action.payload].majorAccess,
				specialtyAccess: RaceData[action.payload].specialtyAccess,
				minorAccess: RaceData[action.payload].minorAccess,
			};
		},
		setMajorAccess: (state: CharacterState, action: PayloadAction<AccessElement[]>) => {
			return {
				...state,
				majorAccess: action.payload,
			};
		},
		setSpecialtyAccess: (state: CharacterState, action: PayloadAction<AccessElement[]>) => {
			return {
				...state,
				specialtyAccess: action.payload,
			};
		},
		setMinorAccess: (state: CharacterState, action: PayloadAction<AccessElement[]>) => {
			return {
				...state,
				minorAccess: action.payload,
			};
		},
	},
});

export const characterActions = {
	selectRace: characterSlice.actions.selectRace,
	setMajorAccess: characterSlice.actions.setMajorAccess,
	setSpecialtyAccess: characterSlice.actions.setSpecialtyAccess,
	setMinorAccess: characterSlice.actions.setMinorAccess,
};

export const selectCharacterInfo = (state: RootState): CharacterState => state.character;
