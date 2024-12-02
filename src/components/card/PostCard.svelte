<div transition:fade>
	<article class="space-y-2">
		<a href={`/blog/${post.slug}`} class="block group">
			<h3 class="text-xl font-medium group-hover:text-primary-500 transition-colors">
				{post.title}
			</h3>
			<time class="text-sm">{new Date(post.date).toLocaleDateString()}</time>
			<p class="text-gray-300 mt-2">{post.description}</p>
		</a>
	</article>
</div>
