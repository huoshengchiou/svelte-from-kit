<!-- a page can export a load function that runs before the component is created. This function runs both during server-side rendering and in the client, and allows you to get data for a page without (for example) showing a loading spinner and fetching data in onMount. -->
<script context="module">
	console.log('load fn runs');
	// load is the SvelteKit equivalent of getStaticProps or getServerSideProps in Next.js or asyncData in Nuxt.js.
	// export async function load({ page, fetch, session, context }) {
	// 	const url = `/blog/${page.params.slug}.json`;
	// 	const res = await fetch(url);

	// 	if (res.ok) {
	// 		return {
	// 			props: {
	// 				article: await res.json()
	// 			}
	// 		};
	// 	}

	// 	return {
	// 		status: res.status,
	// 		error: new Error(`Could not load ${url}`)
	// 	};
	// }
</script>

<script>
	console.log('main script runs');
</script>
