<script lang="ts">
	import { countryId } from '$lib/country-api';
	import Header from '$lib/header.svelte';
	import BackButton from './back-button.svelte';

	let { data } = $props();
	let {
		name: { common: commonName, nativeName },
		population,
		region,
		subregion,
		capital,
		flags,
		tld,
		currencies,
		languages
	} = $derived(data.country);
</script>

<Header />
<div class="p-12">
	<BackButton />
</div>

<main class="flex flex-wrap lg:flex-nowrap gap-x-28">
	<img
		src={flags.svg}
		alt={flags.alt ?? `Flag of ${commonName}`}
		class="object-contain pb-16 lg:h-96 my-auto"
	/>
	<div class="my-auto">
		<h2 class="font-bold text-4xl mb-8">{commonName}</h2>

		<div class="flex flex-col lg:flex-row gap-x-32 gap-y-8">
			<dl class="factlist leading-8">
				<dt>Native Names</dt>
				<dd>{[...Object.values(nativeName).map((n) => n.common)].join(', ')}</dd>
				<dt>Population</dt>
				<dd>{population.toLocaleString()}</dd>
				<dt>Region</dt>
				<dd>{region}</dd>
				<dt>Subregion</dt>
				<dd>{subregion}</dd>
				<dt>Capital</dt>
				<dd>{capital}</dd>
			</dl>
			<dl class="factlist leading-8">
				<dt>Top Level Domain</dt>
				<dd>{tld}</dd>
				<dt>Currencies</dt>
				<dd>{[...Object.values(currencies).map((c) => c.name)].join(', ')}</dd>
				<dt>Languages</dt>
				<dd>{[...Object.values(languages)].join(', ')}</dd>
			</dl>
		</div>

		{@render bordersView()}
	</div>
</main>

{#snippet bordersView()}
	{#if data.borders.length !== 0}
		<h2 class="inline-block mt-14 mr-3 mb-4">Border Countries:</h2>
		<menu class="inline-flex flex-wrap gap-2 max-w-80">
			{#each data.borders as [code, name] (countryId(code))}
				<li class="inline theme-element rounded shadow min-w-24">
					<a
						href={`#/country/${countryId(code)}`}
						class="w-full h-full block text-center font-light px-2 py-1">{name}</a
					>
				</li>
			{/each}
		</menu>
	{/if}
{/snippet}
