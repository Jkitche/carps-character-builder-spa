interface MultilineTextProps {
	text: string;
}

export function MultilineText({ text }: MultilineTextProps): React.ReactElement {
	return (
		<div>
			{text.split("\n").map((i, key) => {
				return <div key={key}>{i}</div>;
			})}
		</div>
	);
}
