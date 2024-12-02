import { defineConfig, presetUno, presetWebFonts, presetTypography } from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			fonts: {
				sans: "Inter:400,500,600,700",
				mono: "JetBrains Mono",
			},
		}),
		presetTypography(),
	],
	theme: {
		colors: {
			primary: {
				DEFAULT: "#FF6F3C",
				hover: "#D15630",
				50: "#FFF4F0",
				100: "#FFE5DB",
				200: "#FFC7B0",
				300: "#FFA986",
				400: "#FF8B5B",
				500: "#FF6F3C",
				600: "#D15630",
				700: "#B54B2A",
				800: "#993F23",
				900: "#7D331C",
			},
			background: {
				light: "#F5F5F5",
				dark: "#17181C",
			},
			surface: {
				light: "#E8E8E8",
				dark: "#1C1B1B",
			},
			text: {
				light: "#333333",
				dark: "#E0E0E0",
			},
			border: {
				light: "#DADADA",
				dark: "#252525",
			},
		},
	},
});
