import React from "react";
import StyledButton from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
