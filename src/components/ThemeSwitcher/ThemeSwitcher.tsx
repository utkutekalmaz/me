import { useThemeContext } from "@/context/ThemeContext";
import React from "react";

// a theme switch component that toggles between two themes. pressed state is berlin, unpressed state is istanbul.
// the switch doesn't look like a toggle switch, but it's a simple button that changes its background color and position.
// berlin state is described with an 💛 emoji, istanbul is 💙
export const ThemeSwitcher = (): React.ReactElement => {
	const { theme, toggleTheme } = useThemeContext();

	return (
		<button
			className={`fixed right-2 top-2 p-6 flex h-12 w-12 items-center justify-center text-awesomeee-link transition-all duration-300 ${
				theme === "berlin" ? "bg-transparent" : "bg-transparent"
			}
            `}
			onClick={() => toggleTheme(theme === "berlin" ? "istanbul" : "berlin")}
		>
			{theme === "berlin" ? "💛 berlin" : "💙 istanbul"}
		</button>
	);
};
