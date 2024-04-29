<script>
    import Gallery from '$lib/Gallery.svelte';
    import YouTubeEmbed from '$lib/YoutubeEmbed.svelte'

    let pics = [
        {url: 'memorial/ashes.jpg', name: "Ashes"},
        {url: 'memorial/entry-table.jpg', name: "Entry Table"},
        {url: 'memorial/fireplace.jpg', name: "Fireplace"},
        {url: 'memorial/looking-outside.jpg', name: "Looking Outside"},
        {url: 'memorial/outside-brenton.jpg', name: "Looking Outside"},
        {url: 'memorial/outside-ocena.jpg', name: "Looking Outside"},
        {url: 'memorial/outside-pano.jpg', name: "Looking Pano", width: 2},
        {url: 'memorial/poster.jpg', name: "Looking Pano"},
        {url: 'memorial/stand-left-close.jpg', name: "Looking Pano"},
        {url: 'memorial/stand-left.jpg', name: "Looking Pano"},
        {url: 'memorial/stand-center.jpg', name: "Looking Pano"},
        {url: 'memorial/stand-right-close.jpg', name: "Looking Pano"},
        {url: 'memorial/stand-right.jpg', name: "Looking Pano"},
        {url: 'memorial/stand.jpg', name: "Looking Pano"},
    ];
</script>

<div class="container video">
	<div class="title">
		<h1>Linda Hoyle's Memorial</h1>
	</div>
	<div class="container">
		<YouTubeEmbed url="https://www.youtube-nocookie.com/embed/WTRzrZ46TR0?si=Bc0SkmgMBGiOl8xa"/>
	</div>
</div>
<div class="container">
    <Gallery pictures={pics} />
</div>

<style lang="scss">
    .container {
        padding-top: 1rem;
        padding-bottom: 1rem;
		text-align: center;
    }
	.video {
		min-height: 100vh;
		width: 100%;

		.title {
			font-size: 2rem;
		}

		.container {
			background-color: rgb(0, 0, 0);
			padding: 5px;
			border-radius: 5px;
			margin-left: 10px;
			margin-right: 10px;
		}
	}
</style>
