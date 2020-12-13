import { Button, FormGroup, InputGroup, IPanelProps } from "@blueprintjs/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerActions, selectPlayerInfo } from "./../../store/player/index";
import styles from "./PlayerInfo.module.scss";
import { RaceSelection } from "./../RaceSelection/RaceSelection";

export function PlayerInfo({ openPanel }: IPanelProps) {
	const player = useSelector(selectPlayerInfo);
	const dispatch = useDispatch();

	const [firstName, setFirstName] = React.useState(player.firstName);
	const [lastName, setLastName] = React.useState(player.lastName);
	const [email, setEmail] = React.useState(player.lastName);

	const onFormSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch(playerActions.initPlayer({ firstName, lastName, email }));
		openPanel({ component: RaceSelection, title: "Race" });
	};

	return (
		<div className={styles.playerInfo}>
			<p>Tell us about you!</p>
			<form onSubmit={onFormSubmit}>
				<FormGroup
					label="First Name"
					labelFor="firstName"
					labelInfo="(required)"
				>
					<InputGroup
						id="firstName"
						leftIcon="user"
						placeholder="First Name"
						className={styles.input}
						value={`${firstName}`}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setFirstName(event.target.value);
						}}
						required
					/>
				</FormGroup>
				<FormGroup
					label="Last Name"
					labelFor="lastName"
					labelInfo="(required)"
				>
					<InputGroup
						id="lastName"
						leftIcon="user"
						placeholder="Last Name"
						className={styles.input}
						value={`${lastName}`}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setLastName(event.target.value);
						}}
						required
					/>
				</FormGroup>
				<FormGroup
					label="Email"
					labelFor="email"
					labelInfo="(required)"
				>
					<InputGroup
						id="email"
						leftIcon="envelope"
						placeholder="Email"
						className={styles.input}
						value={`${email}`}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setEmail(event.target.value);
						}}
						required
					/>
				</FormGroup>

				<Button
					icon="caret-right"
					type="submit"
					className={styles.continueButton}
				>
					Continue
				</Button>
			</form>
		</div>
	);
}
