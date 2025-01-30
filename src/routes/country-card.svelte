<script lang="ts">
	import { countryId, type Country } from '$lib/country-api';

	let { country }: { country: Country } = $props();
	let id = countryId(country.cca3);
	let name = country.name.common;
	let population = country.population;
	let region = country.region;
	let capital = country.capital ?? 'unknown';
	let flags = country.flags;
</script>

<a href={`#/country/${id}`} class="theme-element max-w-md max-h-lg drop-shadow rounded-md">
	{@render image()}
	<div class="m-6 mb-10">
		<h2 class="font-bold py-4">{name}</h2>

		<dl class="factlist leading-6">
			<dt>Population</dt>
			<dd>{population.toLocaleString()}</dd>
			<dt>Region</dt>
			<dd>{region}</dd>
			<dt>Capital</dt>
			<dd>{capital}</dd>
		</dl>
	</div>
</a>

{#snippet image()}
	<div class="aspect-[3/2] rounded-t-md overflow-clip">
		<img
			src={flags.svg}
			alt={flags.alt ?? `Flag of ${name}`}
			loading="lazy"
			class="object-cover object-center h-full w-full"
		/>
	</div>
{/snippet}
