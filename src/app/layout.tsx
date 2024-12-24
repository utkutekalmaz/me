// src/app/layout.tsx
import "./globals.css";
import { Zilla_Slab } from "next/font/google";
import Providers from "./providers";

const zillaSlab = Zilla_Slab({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-zilla-slab",
	style: ["normal", "italic"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={zillaSlab.className + " bg-awesomeee-secondary transition-all duration-300"}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
