<script lang="ts">
	import Photoswipe from '$lib/Photoswipe.svelte';
	import galleryList from './gallery.json';
</script>

<div class="gallery">
	<div class="title">
		<h1>Gallery</h1>
	</div>
	<Photoswipe galleryID="artwork" images={galleryList} />
</div>

<style lang="scss">
	.gallery {
		.title {
			text-align: center;
			font-size: 2rem;
		}
	}
</style>
