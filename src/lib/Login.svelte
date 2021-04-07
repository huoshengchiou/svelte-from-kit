<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let email;
	let password;
	let error;

	const login = async () => {
		error = undefined; //clear last
		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				dispatch('success');
			} else {
				error = 'reg error';
			}
		} catch (err) {
			console.log(err);
			error = 'reg error';
		}
	};
</script>

<h1>login</h1>
<input type="email" bind:value={email} placeholder="email" />
<input type="password" bind:value={password} placeholder="password" />
{#if error}
	<p>{error}</p>
	<p />{/if}
<button on:click={login}>login</button>
