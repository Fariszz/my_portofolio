<script lang="ts">
	import { fade } from "svelte/transition";

	export let company: string;
	export let position: string;
	export let type: "remote" | "onsite";
	export let time: "full-time" | "contract" | "freelance" | "internship";
	export let period: [Date, Date | null];
	export let details: string[];
	export let technologies: string[];
</script>

<div transition:fade>
	<div class="space-y-2">
		<div class="flex flex-col md:flex-row items-start justify-between">
			<div>
				<h3 class="text-xl font-semibold text-primary-500">{company}</h3>
			</div>
			<span class=" text-sm md:text-base">
				{period[0].toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
				-
				{#if period[1] === null}
					Present
				{:else}
					{period[1].toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
				{/if}
			</span>
		</div>
		<p class="text-sm font-medium">
			{position}
		</p>

		<ul class="pt-2 list-disc list-outside pl-4">
			{#each details as detail (detail)}
				<li class="text-sm md:text-base font-serif">
					{detail}
				</li>
			{/each}
		</ul>
		<ul class="flex flex-wrap items-center pt-2 gap-2">
			{#each technologies as technology (technology)}
				<li class="flex gap-1 text-xs rounded-full border border-line dark:border-neutral px-3 py-1">
					{technology}
				</li>
			{/each}
		</ul>
	</div>
</div>
