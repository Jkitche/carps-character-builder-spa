import { IconType } from "./icons";

interface RpgIconProps {
	icon: IconType;
	size?: "lg" | "2x" | "3x" | "4x" | "5x";
}

export function RpgIcon({ icon, size }: RpgIconProps): React.ReactElement {
	return <i className={`ra ra-${icon} ${size && `ra-${size}`}`} />;
}
