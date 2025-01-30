<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons/faMoon';
	import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons/faMoon';
	import LightDarkAlt from './light-dark-alt.svelte';
</script>

<LightDarkAlt>
	{#snippet light()}
		{@render icon(faMoonRegular)}
	{/snippet}
	{#snippet dark()}
		{@render icon(faMoonSolid)}
	{/snippet}
</LightDarkAlt>
{#snippet icon(moon)}
	<Icon data={moon} class="min-w-fit pr-2 mb-0.5 align-middle" />
{/snippet}
