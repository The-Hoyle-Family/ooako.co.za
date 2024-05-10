<script>
	export let url;
	export let allow = 'autoplay encrypted-media; picture-in-picture';
	export let width = 1200;
	export let height = 675;
	export let title = 'YouTube video player';
	/**
	 * @type ReferrerPolicy | undefined | null
	 */
	export let referrerpolicy = 'strict-origin-when-cross-origin';
</script>

<div class="video-container">
	<iframe
		{width}
		{height}
		src={url}
		{title}
		frameborder="0"
		{allow}
		{referrerpolicy}
		allowfullscreen
	></iframe>
</div>

<style lang="scss">
	.video-container {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
