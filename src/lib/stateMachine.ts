import { browser } from '$app/environment';
import { useMachine } from '@xstate/svelte';
import { writable } from 'svelte/store';
import { createMachine } from 'xstate';

const toggleMachine = createMachine({
	initial: 'on',
	states: {
		on: {
			on: {
				toggle: 'off'
			}
		},
		off: {
			on: {
				toggle: 'on'
			}
		}
	}
});

// Can't use this line because -> Function called outside of component initialization in server logs
// export const { state, send } = useMachine(toggleMachine);

// Doesn't work either -> Function called outside of component initialization in browser console
// export const { state, send } = browser ? useMachine(toggleMachine) : { state: null, send: null };

// Doesn't work as expected -> reinitialized on every page
export const actor = writable<{ state: any; send: any }>(undefined, (set) => {
	set(useMachine(toggleMachine));
});
