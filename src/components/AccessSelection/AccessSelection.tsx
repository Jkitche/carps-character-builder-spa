import { HTMLSelect, IPanelProps } from "@blueprintjs/core";
import forEach from "lodash/forEach";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccessElement } from "../../types/element";
import {
	characterActions,
	selectCharacterInfo,
} from "./../../store/character/index";
import styles from "./AccessSelection.module.scss";

export function AccessSelection({ openPanel }: IPanelProps) {
	const character = useSelector(selectCharacterInfo);
	const { majorAccess, specialityAccess, minorAccess } = character;
	const dispatch = useDispatch();

	const elementPermutations = [
		[],
		[AccessElement.AIR],
		[AccessElement.AIR, AccessElement.EARTH],
		[AccessElement.AIR, AccessElement.EARTH, AccessElement.FIRE],
		[AccessElement.AIR, AccessElement.EARTH, AccessElement.WATER],
		[AccessElement.AIR, AccessElement.FIRE],
		[AccessElement.AIR, AccessElement.FIRE, AccessElement.WATER],
		[AccessElement.AIR, AccessElement.WATER],
		[AccessElement.EARTH],
		[AccessElement.EARTH, AccessElement.FIRE],
		[AccessElement.EARTH, AccessElement.FIRE, AccessElement.WATER],
		[AccessElement.EARTH, AccessElement.WATER],
		[AccessElement.FIRE],
		[AccessElement.FIRE, AccessElement.WATER],
		[AccessElement.WATER],
	];

	const options: any = {};
	forEach(
		elementPermutations,
		(elements: AccessElement[]) => (options[elements.join("/")] = elements)
	);

	return (
		<div className={styles.accessSelection}>
			<div className={styles.access}>
				<h2>Major</h2>
				<HTMLSelect
					options={Object.keys(options)}
					value={majorAccess.join("/")}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						dispatch(
							characterActions.setMajorAccess(
								options[event.target.value]
							)
						);
					}}
				/>
			</div>
			<div className={styles.access}>
				<h2>Speciality</h2>
				<HTMLSelect
					options={Object.keys(options)}
					value={specialityAccess.join("/")}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						dispatch(
							characterActions.setSpecialtyAccess(
								options[event.target.value]
							)
						);
					}}
				/>
			</div>
			<div className={styles.access}>
				<h2>Minor</h2>
				<HTMLSelect
					options={Object.keys(options)}
					value={minorAccess.join("/")}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						dispatch(
							characterActions.setMinorAccess(
								options[event.target.value]
							)
						);
					}}
				/>
			</div>
		</div>
	);
}
