<script>
	import Outer from './outer.svelte';

	let text = 'no text';

	const handleMessage = (e) => {
		const { text: getText } = e.detail;
		text = getText;
	};
</script>

{text}

<Outer on:message={handleMessage} />
