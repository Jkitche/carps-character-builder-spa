interface MultilineTextProps {
	text: String;
}

export function MultilineText({ text }: MultilineTextProps) {
	return (
		<div>
			{text.split("\n").map((i, key) => {
				return <div key={key}>{i}</div>;
			})}
		</div>
	);
}
