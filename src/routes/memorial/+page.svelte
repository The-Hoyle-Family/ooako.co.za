<script>
    import YouTubeEmbed from '$lib/YoutubeEmbed.svelte'
</script>

<div class="video">
	<div class="title">
		<h1>Linda Hoyle's Memorial</h1>
	</div>
	<div class="container">
		<YouTubeEmbed url="https://www.youtube-nocookie.com/embed/WTRzrZ46TR0?si=Bc0SkmgMBGiOl8xa"/>
	</div>
</div>

<style lang="scss">
.video {
    height: 100vh;
    width: 100%;
    text-align: center;

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