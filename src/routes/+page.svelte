<script lang="ts">
	// import { state, send } from '$lib/stateMachine';
	import { actor } from '$lib/stateMachine';

	// $: console.log($state);

	const { state, send } = $actor;
</script>

<h1>Toggle machine</h1>

<p>Current state : {$state?.value}</p>

<p><button on:click={() => send?.('toggle')}>Toggle</button></p>

<p><a href="/other">Go to other page</a></p>
