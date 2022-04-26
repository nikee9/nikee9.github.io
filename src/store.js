import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = writable('light');

if (browser) {
	const storedTheme = localStorage.getItem('theme');
    theme.set(storedTheme)
	theme.subscribe((value) => {
		localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light');
	});
}
