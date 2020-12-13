import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { AccessElement } from "../../types/element";
import { Race } from "../../types/race";

interface CharacterState {
	race: Race | null;
	majorAccess: AccessElement[];
	specialityAccess: AccessElement[];
	minorAccess: AccessElement[];
}

const initialState: CharacterState = {
	race: null,
	majorAccess: [],
	specialityAccess: [],
	minorAccess: [],
};

export const characterSlice = createSlice({
	name: "character",
	initialState,
	reducers: {
		selectRace: (state: CharacterState, action: PayloadAction<Race>) => {
			return {
				...state,
				race: action.payload,
			};
		},
		setMajorAccess: (
			state: CharacterState,
			action: PayloadAction<AccessElement[]>
		) => {
			return {
				...state,
				majorAccess: action.payload,
			};
		},
		setSpecialityAccess: (
			state: CharacterState,
			action: PayloadAction<AccessElement[]>
		) => {
			return {
				...state,
				specialityAccess: action.payload,
			};
		},
		setMinorAccess: (
			state: CharacterState,
			action: PayloadAction<AccessElement[]>
		) => {
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
	setSpecialtyAccess: characterSlice.actions.setSpecialityAccess,
	setMinorAccess: characterSlice.actions.setMinorAccess,
};

export const selectCharacterInfo = (state: RootState) => state.character;
