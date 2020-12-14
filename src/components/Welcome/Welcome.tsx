import { Button } from "@blueprintjs/core";
import { useHistory } from "react-router-dom";
import { RoutePaths } from "../../routes";
import styles from "./Welcome.module.scss";

function Welcome() {
	const history = useHistory();
	return (
		<div className={styles.welcome}>
			<h2>Welcome to CARPS! This tool will help you build your character.</h2>
			<Button
				icon="caret-right"
				onClick={() => {
					history.push(RoutePaths.WIZARD);
				}}
			>
				Click here to start!
			</Button>
			<h3>
				If you have an issue with this application, please contact{" "}
				<a href="mailto: jkitche@gmail.com">Jae Kitchens</a>
			</h3>
		</div>
	);
}

export default Welcome;
