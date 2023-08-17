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

// Can't use this line because -> Function called outside of component initialization
// export const { state, send } = useMachine(toggleMachine);

export const { state, send } = browser ? useMachine(toggleMachine) : { state: null, send: null };
