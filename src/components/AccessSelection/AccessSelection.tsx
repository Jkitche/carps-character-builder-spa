import { Button, ButtonGroup } from "@blueprintjs/core";
import curry from "lodash/curry";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccessRank } from "../../types/accessRank";
import { AccessElement } from "../../types/element";
import { RpgIcon } from "../RpgIcon/RpgIcon";
import { characterActions, selectCharacterInfo } from "./../../store/character/index";
import { getAccessDisplay } from "./../../utils/accessDisplay";
import styles from "./AccessSelection.module.scss";

const shouldButtonBeDisabled = (access1: AccessElement[], access2: AccessElement[], element: AccessElement) => {
	return access1.includes(element) || access2.includes(element);
};

interface CallbackCollection {
	shouldDisableButton: (arg0: AccessElement) => boolean;
	setAccess: (arg0: AccessElement[]) => void;
	accessArray: AccessElement[];
	removeElement: (arg0: AccessElement) => AccessElement[];
}

interface AccessButtonProps {
	rank: AccessRank;
	element: AccessElement;
}

export function AccessSelection(): React.ReactElement {
	const character = useSelector(selectCharacterInfo);
	const { race, majorAccess, specialtyAccess: specialtyAccess, minorAccess } = character;
	const dispatch = useDispatch();

	const shouldMajorButtonBeDisabled = curry(shouldButtonBeDisabled)(specialtyAccess, minorAccess);
	const shouldSpecialtyButtonBeDisabled = curry(shouldButtonBeDisabled)(majorAccess, minorAccess);
	const shouldMinorButtonBeDisabled = curry(shouldButtonBeDisabled)(specialtyAccess, majorAccess);

	const removeElement = (accessArray: AccessElement[], element: AccessElement) => {
		const newArray = [...accessArray];
		const index = newArray.indexOf(element);
		if (index > -1) {
			newArray.splice(index, 1);
		}
		return newArray;
	};

	const rankCallbacks: Record<string, CallbackCollection> = {
		[AccessRank.MAJOR]: {
			shouldDisableButton: shouldMajorButtonBeDisabled,
			setAccess: characterActions.setMajorAccess,
			accessArray: majorAccess,
			removeElement: curry(removeElement)(majorAccess),
		},
		[AccessRank.SPECIALTY]: {
			shouldDisableButton: shouldSpecialtyButtonBeDisabled,
			setAccess: characterActions.setSpecialtyAccess,
			accessArray: specialtyAccess,
			removeElement: curry(removeElement)(specialtyAccess),
		},
		[AccessRank.MINOR]: {
			shouldDisableButton: shouldMinorButtonBeDisabled,
			setAccess: characterActions.setMinorAccess,
			accessArray: minorAccess,
			removeElement: curry(removeElement)(minorAccess),
		},
	};

	const AccessButton = ({ rank, element }: AccessButtonProps) => {
		const callbacks = rankCallbacks[rank];
		let elementIcon;
		switch (element) {
			case AccessElement.FIRE:
				elementIcon = <RpgIcon icon="fire" />;
				break;
			case AccessElement.AIR:
				elementIcon = <RpgIcon icon="feather-wing" />;
				break;
			case AccessElement.WATER:
				elementIcon = <RpgIcon icon="water-drop" />;
				break;
			case AccessElement.EARTH:
				elementIcon = <RpgIcon icon="rune-stone" />;
				break;
		}
		return (
			<Button
				disabled={callbacks.shouldDisableButton(element)}
				active={callbacks.accessArray.includes(element)}
				onClick={() => {
					let newAccess = [];
					if (callbacks.accessArray.includes(element)) {
						newAccess = callbacks.removeElement(element);
					} else {
						newAccess = [...callbacks.accessArray, element];
					}
					dispatch(callbacks.setAccess(newAccess));
				}}
			>
				{elementIcon} {element}
			</Button>
		);
	};

	const onAccessesSelected = () => {
		return false;
	};

	return (
		<div className={styles.accessContainer}>
			<Button icon="caret-right" className={styles.nextButton} onClick={onAccessesSelected}>
				Next
			</Button>
			<div className={styles.accessHeader}>
				<p>
					You have chosen <b>{race}</b> which has base accesses of
				</p>
				<p>{getAccessDisplay(race)}</p>
				<p>
					You may increase the rank of any racial access or grant yourself access to an element your race
					would not normally have, up to specialty level.
				</p>
			</div>
			<div className={styles.accessSelection}>
				<div className={styles.access}>
					<h2>Major</h2>
					<ButtonGroup vertical large>
						<AccessButton rank={AccessRank.MAJOR} element={AccessElement.FIRE} />
						<AccessButton rank={AccessRank.MAJOR} element={AccessElement.WATER} />
						<AccessButton rank={AccessRank.MAJOR} element={AccessElement.AIR} />
						<AccessButton rank={AccessRank.MAJOR} element={AccessElement.EARTH} />
					</ButtonGroup>
				</div>
				<div className={styles.access}>
					<h2>Speciality</h2>
					<ButtonGroup vertical large>
						<AccessButton rank={AccessRank.SPECIALTY} element={AccessElement.FIRE} />
						<AccessButton rank={AccessRank.SPECIALTY} element={AccessElement.WATER} />
						<AccessButton rank={AccessRank.SPECIALTY} element={AccessElement.AIR} />
						<AccessButton rank={AccessRank.SPECIALTY} element={AccessElement.EARTH} />
					</ButtonGroup>
				</div>
				<div className={styles.access}>
					<h2>Minor</h2>
					<ButtonGroup vertical large>
						<AccessButton rank={AccessRank.MINOR} element={AccessElement.FIRE} />
						<AccessButton rank={AccessRank.MINOR} element={AccessElement.WATER} />
						<AccessButton rank={AccessRank.MINOR} element={AccessElement.AIR} />
						<AccessButton rank={AccessRank.MINOR} element={AccessElement.EARTH} />
					</ButtonGroup>
				</div>
			</div>
		</div>
	);
}
