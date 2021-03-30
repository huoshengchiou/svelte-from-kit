<script>
	import { onMount, setContext } from 'svelte';
	import { getStores, navigating, page, session } from '$app/stores';
	setContext('from parent', {
		test: 'Hello test'
	});
	console.log('layout runs');
</script>

<div class="contentWrapper">
	<nav>
		<a href=".">Home</a>
		<a href="about">About</a>
		<a href="settings">Settings</a>
	</nav>
	<slot />
</div>

<style>
	.contentWrapper {
		width: 400px;
		height: 50vh;
		background: teal;
	}
</style>
