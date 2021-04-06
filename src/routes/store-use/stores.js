import { writable, readable } from 'svelte/store';

export const count = writable({ key: 1, value: '1234' });

export const word = writable('all text');

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
