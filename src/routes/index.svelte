<script>
	import Counter from '$lib/Counter.svelte';
	import Login from '$lib/Login.svelte';
	import Reg from '$lib/Reg.svelte';
	import { goto } from '$app/navigation';

	console.log('main index loading');

	const redirectToProfile = () => goto('/profile');
</script>

<svelte:head>
	<title>svelte Home</title>
</svelte:head>
<main>
	<h1>Authentication</h1>
	<Login on:success={redirectToProfile} />
	<Reg on:success={redirectToProfile} />
	<!-- <Counter /> -->

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
