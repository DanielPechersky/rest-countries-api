<script lang="ts">
	import { syncPageWithLocalStorage, toggleTheme } from './dark-mode';
	import DarkModeIcon from './dark-mode-icon.svelte';

	syncPageWithLocalStorage();
</script>

<button on:click={toggleTheme}><DarkModeIcon /> Dark mode </button>
