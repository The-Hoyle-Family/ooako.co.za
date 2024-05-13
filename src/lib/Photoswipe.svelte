<script>
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
	import 'photoswipe/style.css';
	import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'
	import { onMount } from 'svelte';

	/**
	 * @type String
	 */
	export let galleryID;
	/**|{html: string}[]
	 * @type {{src: string, width: number, height: number, alt: string, srcset?: string, detail?: string}[]}
	 */
	export let images;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			// Plugins options, for example:
			type: 'auto',
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" id={galleryID}>
	{#each images as image}
		<a
			href={image.src}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<!--<img src={image.thumbnailURL} alt={image.alt} />-->
			<img src={image.src} alt={image.alt} />
			<span class="pswp-caption-conten">{image.detail}</span>
		</a>
	{/each}
</div>

<style lang="scss">
	.pswp-gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		a {
			flex-basis: 320px;
			margin: 5px;

			img {
				object-fit: cover;
				max-width: 100%;
				height: auto;
				vertical-align: middle;
				border-radius: 5px;
			}
		}
	}
</style>
