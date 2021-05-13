import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FormButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconDefinition;
}

const FormButton: React.FC<FormButtonProps> = (props) => {
	const { icon, className, ...btnProps } = props;

	return (
		<button className={`${className || ""} text-primary text-2xl disabled:opacity-50 mr-4`} {...btnProps}>
			{props.children}
			<FontAwesomeIcon icon={props.icon} />
		</button>
	);
};

export default FormButton;
