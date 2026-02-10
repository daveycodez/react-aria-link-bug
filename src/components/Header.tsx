import { Link } from "@tanstack/react-router";
import { Link as ReactAriaLink } from "react-aria-components";

export default function Header() {
	return (
		<div className="flex gap-2">
			<Link to="/">TanStack Link</Link>
			<ReactAriaLink href="/">React Aria Link</ReactAriaLink>
		</div>
	);
}
