<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	export let searchQuery = "";
	export let selectedTags = [];
	export let allTags = [];

	function handleSearch(e) {
		searchQuery = e.target.value;
		dispatch("search", { query: searchQuery });
	}

	function toggleTag(tag) {
		const index = selectedTags.indexOf(tag);
		if (index === -1) {
			selectedTags = [...selectedTags, tag];
		} else {
			selectedTags = [...selectedTags.filter((t) => t !== tag)];
		}
		dispatch("tagChange", { tags: selectedTags });
	}
</script>

<div class="space-y-6">
	<div class="relative">
		<input
			type="text"
			placeholder="Search posts..."
			value={searchQuery}
			on:input={handleSearch}
			class="w-full px-4 py-2 rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
		/>
		<svg
			class="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</div>

	<div class="flex flex-wrap gap-2">
		{#each allTags as tag}
			<button
				class="tag-button px-3 py-1 text-xs rounded-full border transition-all duration-200 ease-in-out hover:border-primary"
				class:selected={selectedTags.includes(tag)}
				class:bg-primary-500={selectedTags.includes(tag)}
				class:text-white={selectedTags.includes(tag)}
				class:border-primary-500={selectedTags.includes(tag)}
				class:shadow-md={selectedTags.includes(tag)}
				class:bg-background-light={!selectedTags.includes(tag)}
				class:dark:bg-background-dark={!selectedTags.includes(tag)}
				class:text-text-light={!selectedTags.includes(tag)}
				class:dark:text-text-dark={!selectedTags.includes(tag)}
				class:border-border-light={!selectedTags.includes(tag)}
				class:dark:border-border-dark={!selectedTags.includes(tag)}
				on:click={() => toggleTag(tag)}
			>
				{#if selectedTags.includes(tag)}
					<span class="flex items-center gap-1">
						{tag}
						<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
					</span>
				{:else}
					{tag}
				{/if}
			</button>
		{/each}
	</div>
</div>
