<script lang="ts">
	import { countryId } from '$lib/country-api';
	import Header from '$lib/header.svelte';
	import CountryView from './country-card.svelte';
	import SearchAndFilter from './search-and-filter.svelte';

	let { data } = $props();
	let { regions, countries } = $derived(data);
	let filteredRegion: string | null = $state(null);
	let search: string = $state('');

	let displayedCountries = $derived.by(() => {
		let displayedCountries = countries;
		if (filteredRegion) {
			displayedCountries = displayedCountries.filter((c) => c.region == filteredRegion);
		}
		if (search) {
			displayedCountries = displayedCountries.filter((c) =>
				c.name.common.toLowerCase().includes(search.toLowerCase())
			);
		}
		displayedCountries.sort((a, b) => b.population - a.population);
		return displayedCountries;
	});
</script>

<Header />
<main class="py-8 lg:py-16 h-full text-sm">
	<SearchAndFilter {regions} bind:search bind:filteredRegion />
	{@render countryGrid()}
</main>

{#snippet countryGrid()}
	<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-8">
		{#each displayedCountries as country (countryId(country.cca3))}
			<CountryView {country} />
		{/each}
	</div>
{/snippet}
