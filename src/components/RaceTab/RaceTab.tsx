import { Button, Classes, IPanel } from "@blueprintjs/core";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { RaceData } from "../../data/raceData";
import { characterActions } from "../../store/character";
import { Race } from "../../types/race";
import { AccessSelection } from "../AccessSelection/AccessSelection";
import { MultilineText } from "../MultilineText/MultilineText";
import styles from "./RaceTab.module.scss";

interface RaceTabProps {
	race: Race;
	openPanel<P>(panel: IPanel<P>): void;
}

export function RaceTab({ race, openPanel }: RaceTabProps) {
	const dispatch = useDispatch();
	const onRaceSelected = () => {
		dispatch(characterActions.selectRace(race));
		openPanel({ component: AccessSelection, title: "Access" });
	};
	return (
		<div className={styles.raceTab}>
			<div className={styles.raceInfo}>
				<div
					className={clsx(styles.imagePlaceholder, Classes.SKELETON)}
				></div>
				<div className={styles.raceMeta}>
					<h3>{race}</h3>
					<h4>Base Access:</h4>
					<p>{RaceData[race].access}</p>
					<h4>Costuming Requirements:</h4>
					<div>
						<MultilineText
							text={RaceData[race].costumingRequirements}
						/>
					</div>
					<h4>Recommended Costuming:</h4>
					<MultilineText text={RaceData[race].recommendedCostuming} />
				</div>
			</div>
			<h4>Description:</h4>
			<MultilineText text={RaceData[race].description} />
			<Button
				icon="caret-right"
				className={styles.nextButton}
				onClick={onRaceSelected}
			>
				Choose {race}
			</Button>
		</div>
	);
}
