"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
	return (
		<>
			<ThemeProvider>{children}</ThemeProvider>
		</>
	);
};

export default Providers;
