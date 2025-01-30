<script lang="ts">
	import Icon from 'svelte-awesome';

	import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';
</script>

<button
	type="button"
	class="theme-element h-10 w-32 rounded shadow font-light"
	on:click={() => window.history.back()}
	><Icon data={faArrowLeftLong} class="align-middle mb-0.5 mr-2" />Back</button
>
