<script>
	const getDummy = async () => {
		const res = await fetch(`src/data/dummyBack.json`);
		const payload = await res.json();

		if (res.ok) {
			return payload;
		} else {
			throw new Error(payload);
		}
	};

	let list = getDummy();
</script>

{#await list}
	<p>...waiting</p>
{:then payload}
	{#each payload.products as product, i}
		<p>The number is {product.title}</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
