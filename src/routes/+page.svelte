<script lang="ts">
	import { getContext } from 'svelte';
	import type { Actor } from '$lib/stateMachine';

	const actor = getContext<Actor>('actor');

	const { state, send } = actor;
</script>

<h1>Toggle machine</h1>

<p>Current state : {$state.value}</p>

<p><button on:click={() => send('toggle')}>Toggle</button></p>

<p><a href="/other">Go to other page</a></p>
