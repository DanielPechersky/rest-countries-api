<script lang="ts">
	import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
	import { Icon } from 'svelte-awesome';

	let {
		regions,
		search = $bindable(),
		filteredRegion = $bindable()
	}: {
		regions: [string, string][];
		search: string;
		filteredRegion: string | null;
	} = $props();
</script>

<div class="flex flex-wrap gap-y-12 [&>*]:h-16">
	<div class="relative theme-input w-[28rem]">
		<Icon data={faSearch} class="absolute pointer-events-none my-auto top-0 bottom-0 left-8" />

		<input
			bind:value={search}
			type="search"
			placeholder="Search for a country..."
			class="w-full h-full theme-element placeholder-current pl-16 pr-2 shadow rounded placeholder:font-light placeholder:text-sm"
		/>
	</div>
	<div class="lg:mx-auto"></div>
	<div class="relative w-64">
		<Icon data={faAngleDown} class="absolute pointer-events-none my-auto top-0 bottom-0 right-6" />

		<select
			bind:value={filteredRegion}
			class="w-full h-full pl-8 theme-element rounded shadow appearance-none"
		>
			<option value={null} selected>Filter by Region</option>
			{#each regions as [name, apiName] (apiName)}
				<option value={apiName}>{name}</option>
			{/each}
		</select>
	</div>
</div>
