<script>
	export let data;
</script>

<header>
    <div id="logo">
        OOAKO
    </div>
	<nav>
		<ul>
			{#each data.nav as nav}
				<li><a href={nav[1]}>{nav[0]}</a></li>
			{/each}
		</ul>
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<div id="socials" class="socials">
		{#each data.socials as social}
		<div class={social.slug}><a href={social.href}><img alt={social.name} height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/{social.slug}.svg" /></a></div>
		{/each}
	</div>	
	<div class="links" id="footer-links">

	</div>
</footer>
