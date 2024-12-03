export type WorkExperience = {
	company: string;
	position: string;
	type: "remote" | "onsite";
	time: "full-time" | "contract" | "freelance" | "internship";
	period: [Date, Date | null];
	details: string[];
	technologies: string[];
};
