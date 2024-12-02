<script lang="ts">
export let posts: Array<{
	slug: string;
	data: {
		title: string;
		description: string;
		pubDate: string;
		tags: string[];
	};
}>;
export let showSeeMore: boolean = true;
</script>

<section class="space-y-4">
	<div class="flex justify-between items-center">
		<h2 class="text-2xl font-semibold">Recent Posts</h2>
		{#if showSeeMore}
			<a href="/blog" class="text-primary hover:text-primary-hover transition-colors"> See more → </a>
		{/if}
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each posts as post}
			<article
				class="p-6 rounded-lg border border-collapse border-border-light dark:border-border-dark hover:border-primary transition-colors group relative flex flex-col min-h-[200px]"
			>
				<a href={`/blog/${post.slug}`} class="block group flex-grow">
					<h2 class="text-2xl font-semibold group-hover:text-primary transition-colors">
						{post.data.title}
					</h2>
					<time class="text-sm text-gray-500 dark:text-gray-400">
						{new Date(post.data.pubDate).toLocaleDateString()}
					</time>
					<p class="text-text-light dark:text-text-dark mt-2">{post.data.description}</p>
				</a>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each post.data.tags as tag}
						<span
							class="px-3 py-1 text-xs rounded-full border border-line bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
						>
							{tag}
						</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>
