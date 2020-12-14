import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Player } from "../../types/player";

interface PlayerState {
	firstName: string;
	lastName: string;
	email: string;
}

const initialState: PlayerState = {
	firstName: "",
	lastName: "",
	email: "",
};

export const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		initPlayer: (state: PlayerState, action: PayloadAction<Player>) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const playerActions = {
	initPlayer: playerSlice.actions.initPlayer,
};

export const selectPlayerInfo = (state: RootState): PlayerState => state.player;
