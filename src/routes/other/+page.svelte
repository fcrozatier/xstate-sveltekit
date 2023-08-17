<script lang="ts">
	import { state, send } from '$lib/stateMachine';
</script>

<h1>Toggle machine on other page</h1>

<p>Current state : {$state?.value}</p>

<p><button on:click={() => send?.('toggle')}>Toggle</button></p>

<p><a href="/">Go to main page</a></p>
