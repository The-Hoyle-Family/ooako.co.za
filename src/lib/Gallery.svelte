<script>
    /**
	 * @type {{url: string, name: string, width?: Number}[]}
	 */
     export let pictures = [];

     if (typeof pictures === 'string') {
        // TODO: Look into dynamically importing a whole folder
     }
</script>

<div class="gallery">
    {#each pictures as pic}
    <div class="image"><!-- style="flex-basis: {pic.width ? pic.width * 320 : 320}px" TODO: Width tag-->
        <img src={pic.url} alt={pic.name}>
    </div>
    {:else}
    <h1 class="warning">Gallery is empty</h1>
    {/each}
</div>
<slot />

<style lang="scss">
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    .image {
        flex-basis: 320px;
        transition: flex-basis 0.5s;

        &:hover {
            flex-basis: 350px;
        }

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