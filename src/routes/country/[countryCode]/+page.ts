import { getCountries, getCountry } from '$lib/country-api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params: { countryCode } }) => {
    const [countries, country] = await Promise.all([getCountries(fetch), getCountry(fetch, countryCode)]);
    if (!country) {
        error(404, {
            message: 'Not found'
        });
    }
    const borders: [string, string][] = country.borders.map((code) => {
        let country = countries.find((c) => c.cca3 == code);
        let displayName = country ? country.name.common : code;
        return [code, displayName]
    })
    return { country, borders };
};