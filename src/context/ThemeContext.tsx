"use client";
// src/app/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode, FunctionComponent } from "react";

export type ThemeMode = "light" | "dark" | "auto";
export type ThemeName = "berlin" | "istanbul";

interface ThemeContextType {
	theme: ThemeName;
	toggleTheme: (themeName: ThemeName) => void;
	themeMode: ThemeMode;
	toggleThemeMode: (themeMode: ThemeMode) => void;
}

const ThemeInitialContext: ThemeContextType = {
	theme: "berlin",
	toggleTheme: () => {},
	themeMode: "light",
	toggleThemeMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(ThemeInitialContext);

const ThemeModeMap: Record<number, ThemeMode> = {
	0: "light",
	1: "dark",
	2: "auto",
};

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeName>("berlin");
	const [themeMode, setThemeMode] = useState<ThemeMode>("light");

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const darkModeOn = darkModeMediaQuery.matches;

		setThemeMode(darkModeOn ? "dark" : "light");

		const darkModeChangeListener = (e: MediaQueryListEvent) => {
			setThemeMode(e.matches ? "dark" : "light");
		};

		darkModeMediaQuery.addEventListener("change", darkModeChangeListener);

		return () => {
			darkModeMediaQuery.removeEventListener("change", darkModeChangeListener);
		};
	}, []);

	const toggleTheme = (themeName: ThemeName) => {
		setTheme(themeName);
		if (themeName === "istanbul") {
			document.body.classList.add("istanbul");
			document.body.classList.remove("berlin");
		} else if (themeName === "berlin") {
			document.body.classList.add("berlin");
			document.body.classList.remove("istanbul");
		}
	};

	const toggleThemeMode = (themeMode: ThemeMode) => {
		setThemeMode(themeMode);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, themeMode, toggleThemeMode }}>{children}</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
