import { Breadcrumbs, IPanel, PanelStack } from "@blueprintjs/core";
import map from "lodash/map";
import React from "react";
import { PlayerInfo } from "../PlayerInfo/PlayerInfo";
import styles from "./PanelController.module.scss";

export function PanelController(): React.ReactElement {
	const [panels, setPanels] = React.useState<Array<IPanel>>([]);
	const breadcrumbs = [
		{ text: "Player Info" },
		...map(panels, (panel) => ({
			text: panel.title,
		})),
	];
	return (
		<>
			<Breadcrumbs items={breadcrumbs}></Breadcrumbs>
			<PanelStack
				className={styles.panelController}
				initialPanel={{
					component: PlayerInfo,
					title: "Player Info",
				}}
				onOpen={(panel) => setPanels([...panels, panel])}
				onClose={() => setPanels(panels.slice(1))}
			/>
		</>
	);
}
