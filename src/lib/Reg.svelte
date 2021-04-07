<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let email;
	let password;
	let name;
	let error;

	const reg = async () => {
		error = undefined; //clear last
		try {
			const res = await fetch('/auth/register', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					name
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

<h1>Reg</h1>
<input type="email" bind:value={email} placeholder="email" />
<input type="text" bind:value={name} placeholder="name" />
<input type="password" bind:value={password} placeholder="password" />
{#if error}
	<p>{error}</p>
	<p />{/if}
<button on:click={reg}>register</button>
