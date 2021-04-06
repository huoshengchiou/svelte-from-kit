<script>
	import { count, word, time } from './stores.js';
	import { onDestroy } from 'svelte';
	// which means it has set and update methods in addition to subscribe.
	let displayData;

	const unsubscribe = count.subscribe((value) => {
		displayData = value;
	});

	const changeStore = () => {
		// count.set({});
		count.update((pre) => ({ ...pre, value: 7777 }));
	};
	onDestroy(unsubscribe);
</script>

<div>store</div>

<h1>{displayData.value}</h1>
<p>{$word}</p>
<p>{$time}</p>

<button on:click={changeStore}>update</button>
