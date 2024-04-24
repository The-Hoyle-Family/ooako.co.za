<script>
	export let data;
</script>

<style lang="scss">
abbr[title] {
	border-bottom: none !important;
  	cursor: inherit !important;
  	text-decoration: none !important;
}

header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	text-align: center;
	color: #FFF;
	background-color: #000;

	a {
		color: #FFF;
		padding: 14px 16px;
		text-decoration: none;

		&:hover {
			color: #F0F;
		}
	}

	#logo {
		float: left;
		padding: 12px 16px;
		font-size: 2.5rem;
		margin-left: 3rem;
	}

	.navbar {
		float: right;
		height: 100%;

		ul {
			list-style: none;
			padding: 0;
		}

		li {
			display: inline;
			margin-right: 10px;
		}
	}
}

main {
	margin-top: 3rem;
	padding-top: 1rem;
	min-height: 70vh;
}

footer {
	text-align: center;
	width: 100%;
	border-top: 6px solid blue;
	color: #FFF;
	background-color: #000;
	padding-bottom: 3rem;
	padding-top: 3rem;

	.socials {
		display: inline-flex;

		.social {
			padding: 12px;

			img {
				filter: invert(99%) sepia(6%) saturate(571%) hue-rotate(222deg) brightness(119%) contrast(100%);
			}

			a:hover img {
				filter: invert(65%) sepia(68%) saturate(3793%) hue-rotate(136deg) brightness(107%) contrast(101%);
			}
		}
	}

	.links {

	}

	.dev-info {
		color: #adadad;

		a {
			text-decoration: none;
			color: #444444;

			&:hover {
				color: #b1b1b1;
			}
		}
	}
}
</style>

<header>
    <div id="logo">
        <abbr title="One Of A Kind Original">OOAKO</abbr>
    </div>
	<nav class="navbar">
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
		<div class="social {social.slug}"><a href={social.href}><img alt={social.name} height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/{social.slug}.svg" /></a></div>
		{/each}
	</div>	
	<div class="links" id="footer-links">

	</div>
	<div class="dev-info">
		<p>Created/Maintained by <a href="https://tagnumelite.com">Tagan Hoyle</a>. Powered by <a href="https://kit.svelte.dev/">SvelteKit</a> using <a href="https://pages.cloudflare.com/">Cloudfare Pages</a>.</p>
	</div>
</footer>
