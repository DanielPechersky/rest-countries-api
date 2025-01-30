import { getCountries } from '$lib/country-api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const REGIONS: [string, string][] = [["Africa", "Africa"], ["America", "Americas"], ["Asia", "Asia"], ["Europe", "Europe"], ["Oceania", "Oceania"]];
    const countries = await getCountries(fetch);
    return { regions: REGIONS, countries };
};
