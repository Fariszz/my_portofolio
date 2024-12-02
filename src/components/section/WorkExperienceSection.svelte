<script lang="ts">
	import WorkExperienceCard from "~/components/card/WorkExperienceCard.svelte";
	import type { WorkExperience } from "~/models/work-experience.ts";

	export let workExperiences: WorkExperience[];

	export let showSeeMore: boolean = true;
</script>

<section class="space-y-6">
	<div class="flex justify-between items-center">
		<h2 class="text-2xl font-semibold">Recent Experience</h2>

		{#if showSeeMore}
		<a href="/experience" class="text-primary-500 hover:text-primary-600"> See more → </a>
		{/if}
	</div>
	<div class="space-y-6">
		{#each workExperiences as experience (experience.company)}
			<WorkExperienceCard {...experience} />
		{/each}
	</div>
</section>
