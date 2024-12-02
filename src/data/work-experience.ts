import type { WorkExperience } from "~/models/work-experience";

export const workExperiences: WorkExperience[] = [
	{
		company: "PT. Koneksi Strategis Indonesia",
		position: "Java Developer",
		type: "onsite",
		time: "full-time",
		period: [new Date(2024, 8), null],
		details: [
			"Implemented multi-threading on process system",
			"Collaborated with senior developers to create code according to predetermined standards",
			"Utilized Java architecture knowledge to optimize system performance",
		],
		technologies: ["Java", "Oracle", "MySQL", "Redis", "docker"],
	},
	{
		company: "Chup Online Sdn Bhd",
		position: "Backend Developer",
		type: "remote",
		time: "freelance",
		period: [new Date(2024, 2), null],
		details: [
			"Integrated the system with WhatsApp meta for enhanced functionality",
			"Participated in team meetings and discussions to brainstorm ideas for system improvement",
			"Successfully optimized code execution time from 1700ms to 100ms, achieving a 94% performance improvement through code refactoring and efficient algorithm implementation.",
		],
		technologies: ["typescript", "nest js", "Postgresql", "mongodb", "docker", "Laravel"],
	},
	{
		company: "Olahkarsa",
		position: "Fullstack Web Developer",
		type: "remote",
		time: "freelance",
		period: [new Date(2024, 3), new Date(2024, 6)],
		details: [
			"Developed a comprehensive reporting system to meet internal employee needs and enhancing data accessibility.a",
			"Implemented Single Sign-On (SSO) functionality using Laravel to streamline user authentication and improve security across multiple applications.",
		],
		technologies: ["php", "Laravel", "mysql"],
	},
	{
		company: "PT. Zona Karya Nusantara",
		position: "Fullstack Web Developer",
		type: "onsite",
		time: "contract",
		period: [new Date(2024, 3), new Date(2024, 6)],
		details: [
			"Collaborated with cross-functional teams to develop systems that meet user expectations and business objectives",
			"Participated in regular stand-ups and sprint planning meetings to track progress and prioritize tasks",
			"Utilized Laravel to design and build frontend and backend systems",
		],
		technologies: ["php", "Laravel", "mysql", "Ubuntu", "Ajax"],
	},
	{
		company: "Elux Space",
		position: "Backend Developer",
		type: "onsite",
		time: "contract",
		period: [new Date(2023, 4), new Date(2023, 10)],
		details: [
			"Applied agile development methodologies to adapt quickly to changing project requirements and deliver iterative improvements",
			"Actively participated in bug resolution activities, identifying and troubleshooting issues promptly to maintain the stability of the Kendali App.",
			"Implemented best practices for Laravel API development to optimize system performance and ensure the security of user data.",
		],
		technologies: ["Laravel", "Php", "MySQL", "Rest APi"],
	},
];
