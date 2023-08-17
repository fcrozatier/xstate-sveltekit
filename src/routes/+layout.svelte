<script lang="ts">
	import { setContext } from 'svelte';
	import { toggleMachine } from '$lib/stateMachine';
	import { useMachine } from '@xstate/svelte';

	setContext('actor', useMachine(toggleMachine));
</script>

<slot />
