<script>
	import { onMount, setContext } from 'svelte';
	import { getStores, navigating, page, session } from '$app/stores';
	setContext('from parent', {
		test: 'Hello test'
	});
	console.log('root layout runs');
</script>

<div class="contentWrapper">
	<nav>
		<a class='test' href=".">Home</a>
		<a href="about">About</a>
		<a href="settings">Settings</a>
	</nav>
	<slot />
</div>

<style lang="scss" global>
	//globalkeyword so these styles will be applied globally
	/* @import "src/style/global.scss"; */
	@import "../style/global.scss";

	.contentWrapper {
		width: 400px;
		height: 50vh;
		background: teal;
		.test{
          text-decoration:none;
		  font-size: 20px;
		}
	}
</style>
