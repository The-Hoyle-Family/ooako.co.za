<script lang="ts">
	import Photoswipe from "$lib/Photoswipe.svelte";

	const pictures : Record<string, string> = import.meta.glob(
		'$lib/gallery/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
		{
			eager: true,
			import: 'default'
		}
	);

	const images = Object.keys(pictures).map((path) => {
		let img = pictures[path];
		let alt = img.split('\\').pop()?.split('/').pop();
		return {src: img, height: 100, width: 100, alt: alt ? alt : "an image"}
	});
</script>


<div class="gallery">
	<div class="title">
		<h1>Gallery</h1>
	</div>
	<Photoswipe galleryID="artwork" images={images}/>
</div>
