<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
	export let stack: [stack: string, url: string][];
</script>

<div>
	<article class="space-y-2">
		<a href={`/blog/${href}`} class="block group">
			<h3 class="text-xl font-medium group-hover:text-primary-500 transition-colors">
				{title}
			</h3>
			<p class="text-gray-300 mt-2">{description}</p>
		</a>
	</article>
</div>
