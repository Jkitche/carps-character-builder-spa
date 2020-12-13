import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./character";
import { playerSlice } from "./player";

export const store = configureStore({
	reducer: {
		player: playerSlice.reducer,
		character: characterSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
