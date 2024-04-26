<script>
	import Quote from '$lib/Quote.svelte';
</script>

<div class="jumbotron">
	<div class="container">
		<div class="title">
			<p>Linda Ann Hoyle</p>
			<p class="sub">1952-2024 (72 years)</p>
		</div>
		<div class="info">
			<p>A mother, artist and light of the community</p>
			<p>Someone who was loved by all and hated by none</p>
			<p>Her creativity knew no bounds, art was her life</p>
			<p>Her smile lit up any room, made any place feel like home</p>
			<p></p>
		</div>
	</div>
</div>
<div class="container inline">
	<div>
		<Quote author="Andrew H">
			My wife for over 50 years and my best friend through it all. She always complained about the
			mess I left but otherwise, she has always been friendly and happy.
		</Quote>
	</div>
	<div>
		<Quote author="Tagan H">
			I never treated granny the way a grandson should've but she still took care of me, clothed me
			and fed me. I was never without shelter, food and clothes. She made sure everyone was taken
			care of.
		</Quote>
	</div>
	<div><Quote author="Lee H">Mom never stopped caring and worrying about me, she will be missed.</Quote></div>
	<div>
		<Quote author="Zara DB">
			Mom was my best friend.
		</Quote>
	</div>
	<div>
		<Quote author="Jacques DB">
			Linda was a great mother-in-law!
		</Quote>
	</div>
</div>

<style lang="scss">
	.jumbotron {
		width: 100%;
		background: url('/main-jumbo.png') no-repeat top;
		background-size: 100vw;
		text-align: center;
		color: #e4e4e4;
		text-shadow: 2px 2px #000;
		border-bottom: 2px solid #000;

		.container {
			padding: 7rem 3rem;
		}
	}

	.container {
		margin-left: auto;
		margin-right: auto;
        padding: 5px;

		.title {
			font-size: 4rem;

			&:first-child p {
				margin-bottom: 0;
			}

			.sub {
				font-size: 1.5rem;
				margin-top: 0;
			}
		}

		.info p {
			text-shadow: 1px 1px #000;
		}

		&.inline {
			display: inline-flex;
			flex-wrap: wrap;
            gap: 1rem;

			& * {
				flex: 23%;
			}
		}
	}
</style>
