<script lang="ts">
	let { light, dark } = $props();
</script>

<div class="contents dark:hidden">{@render light()}</div>
<div class="hidden dark:contents">{@render dark()}</div>
