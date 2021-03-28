<!-- a page can export a load function that runs before the component is created. This function runs both during server-side rendering and in the client, and allows you to get data for a page without (for example) showing a loading spinner and fetching data in onMount. -->

<script context="module">
	// import fs from "fs/promises"; //node file system //如果在client side執行會fail，因為bowser不支援
    //  console.log('process.cwd()',process.cwd())
//     const filePath = path.join(process.cwd(), "data", "dummyBack.json");
//   //current work directory
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

	// export async function load({ page, fetch, session, context }) {

	// 	console.log('load', page, fetch, session, context)
	// 	const url = `/data/dummyBack.json`;
	// 	const res = await fetch(url);
	// 	const payload=await res.json()
	// 	console.log('payload',payload)

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
	import { amp, browser, dev } from '$app/env';
	import { goto, prefetch, prefetchRoutes } from '$app/navigation';

	// console.log('main script runs',browser,dev);
    
	console.log('goto',goto)
	
</script>

<p></p>
<br>

<!-- <button onClick={()=>goto()}>click</button> -->





