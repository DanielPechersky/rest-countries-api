<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="contents [&>*]:px-4 lg:[&>*]:px-20">
	{@render children()}
</div>
