<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { IconButton } from "@gradio/atoms";
	import { Undo, Clear, Edit } from "@gradio/icons";

	const dispatch = createEventDispatcher();

	export let zoomed: boolean = false;
</script>

<div class:zoomed={zoomed}>
	<IconButton Icon={Edit} label="Zoom" on:click={() => dispatch("zoom")} />
	<IconButton Icon={Undo} label="Undo" on:click={() => dispatch("undo")} />
	<IconButton
		Icon={Clear}
		label="Clear"
		on:click={(event) => {
			dispatch("clear");
			event.stopPropagation();
		}}
	/>
</div>

<style>
	div {
		display: flex;
		position: absolute;
		top: var(--size-2);
		right: var(--size-2);
		justify-content: flex-end;
		gap: var(--spacing-sm);
		z-index: var(--layer-5);
	}
</style>
