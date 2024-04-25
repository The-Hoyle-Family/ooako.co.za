<script>
    export let author = "John Doe";
</script>

<style lang="scss">
blockquote {
    margin: 1.5rem auto;
    max-width: 60vw;
    text-align: center;
    background-color: #e7e7e7;
    padding: 1rem;
    border-radius: 1rem;

    footer {
        color: rgb(124, 124, 124);

        &::before {
            color: black;
            content: "— ";
        }
    }
}
</style>

<blockquote>
	<p><slot /></p>
    <footer>{author}</footer>
</blockquote>
