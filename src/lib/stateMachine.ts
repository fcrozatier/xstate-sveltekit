import type { useMachine } from '@xstate/svelte';
import { createMachine } from 'xstate';

type ToggleEvents = { type: 'toggle' };

export const toggleMachine = createMachine({
	tsTypes: {} as import('./stateMachine.typegen').Typegen0,
	schema: {
		events: {} as ToggleEvents
	},
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

export type Actor = ReturnType<typeof useMachine<typeof toggleMachine>>;
