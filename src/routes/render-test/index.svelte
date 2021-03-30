
<script context="module">
 console.warn('module script runs')


 export const load=async()=>{
   console.log('fn load')
   return {
       props:{
           key:1
       }
   }
 }

// export async function load({ page, fetch, session, context }) {

// 		console.log('load', page, fetch, session, context)
// 		const url = `/data/dummyBack.json`;
// 		const res = await fetch(url);
// 		const payload=await res.json()
// 		console.log('payload',payload)

// 		if (res.ok) {
// 			return {
// 				props: {
// 					article: await res.json()
// 				}
// 			};
// 		}

// 		return {
// 			status: res.status,
// 			error: new Error(`Could not load ${url}`)
// 		};
// 	}
	


</script>

<script>
import { onMount } from 'svelte';
console.warn('general script runs')

export let key
let photos = [];

	// onMount(async () => {
	// 	const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
	// 	photos = await res.json();
	// });
onMount(()=>{

    console.log('inside onMount')
})

</script>


<div><h1>render test</h1>
    <h3>{key}</h3></div>

