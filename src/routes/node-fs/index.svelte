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
