import { IPanelProps, Tab, Tabs } from "@blueprintjs/core";
import map from "lodash/map";
import React from "react";
import { RaceNames } from "../../types/race";
import { RaceTab } from "../RaceTab/RaceTab";
import styles from "./RaceSelection.module.scss";

export function RaceSelection({ openPanel }: IPanelProps): React.ReactElement {
	const [visibleRace, setVisibleRace] = React.useState<string>(RaceNames.ALLERIAN);
	const raceTabs = map(RaceNames, (race) => (
		<Tab
			key={race}
			id={race}
			title={race}
			panel={<RaceTab race={race} openPanel={openPanel} />}
			className={styles.tab}
		/>
	));
	const onTabChange = (race: string) => {
		setVisibleRace(race);
	};
	return (
		<div className={styles.raceSelection}>
			<h3 className={styles.header}>Select a race:</h3>
			<Tabs selectedTabId={visibleRace} onChange={onTabChange} vertical>
				{raceTabs}
			</Tabs>
		</div>
	);
}
