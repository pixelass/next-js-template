/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Button from "./";

describe("Button component", () => {
	it("should render", () => {
		const text = "Click me";
		render(<Button>{text}</Button>);
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});

describe("Button component", () => {
	it("should allow clicks", async () => {
		const handleClick = jest.fn();
		const text = "Click me";
		render(<Button onClick={handleClick}>{text}</Button>);
		await userEvent.click(screen.getByText(text));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
