import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../../routes";
import Welcome from "../Welcome/Welcome";
import { PanelController } from "./../PanelController/PanelController";

export function RouterSwitch() {
	return (
		<Switch>
			<Route path={RoutePaths.WIZARD}>
				<PanelController />
			</Route>
			<Route path={RoutePaths.WELCOME}>
				<Welcome />
			</Route>
		</Switch>
	);
}
