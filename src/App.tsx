import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { RouterSwitch } from "./components/RouterSwitch/RouterSwitch";
import { store } from "./store";
import "rpg-awesome/scss/rpg-awesome.scss";

export default function App(): React.ReactElement {
	return (
		<Provider store={store}>
			<div className={styles.app}>
				<h1>CARPS Character Builder</h1>
				<BrowserRouter>
					<RouterSwitch />
				</BrowserRouter>
			</div>
		</Provider>
	);
}
