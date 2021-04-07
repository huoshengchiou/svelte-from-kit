<script context="module">
	// export const load = async ({ session }) => {
	// 	if (!session.authenticated) {
	// 		return {
	// 			status: 302,
	// 			redirect: '/auth/unauthorized'
	// 		};
	// 	} else {
	// 		return {
	// 			props: {
	// 				email: session.email
	// 			}
	// 		};
	// 	}
	// };
</script>

<script>
	import { onMount } from 'svelte';

	export let email;
	let name;
	onMount(async () => {
		const res = await fetch('/user');
		const user = await res.json();
		name = user.name;
	});
</script>

<h1>profile</h1>
