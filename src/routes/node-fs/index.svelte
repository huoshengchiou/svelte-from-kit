<script context="module">
	import { browser } from '$app/env';

	const getFs = async () => {
		let fs;
		const module = await import('fs');
		console.log('fs', module);
	};
	if (!browser) {
		// import path from 'path';
		getFs();
	}

	// export const load = async ({ session }) => {
	// 	//失敗時回狀態，成功時回component用的props
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

	onMount(async () => {
		const res = await fetch('/node-fs/dummy');
		const payload = await res.json();

		console.log('payload', payload);

		if (res.ok) {
			return payload;
		} else {
			throw new Error(payload);
		}
	});
</script>

<h1>node-fs</h1>
