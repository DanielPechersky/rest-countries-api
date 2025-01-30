export interface Country {
    name: {
        common: string,
        nativeName: { [index: string]: { official: string, common: string } }
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    flags: Flags,
    cca3: Cca3Code,
    tld: string[],
    currencies: { [index: string]: { name: string } },
    languages: { [index: string]: string },
    borders: Cca3Code[]
}

// a capitalized cca3 code
export type Cca3Code = string;

export interface Flags {
    svg: string,
    png: string,
    alt: string,
}

export async function getCountries(fetch): Promise<Country[]> {
    const data = await fetch("https://restcountries.com/v3.1/independent?status=true");
    const countries = await data.json();
    return countries;
}

export async function getCountry(fetch, code: string): Promise<Country | null> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!response.ok) {
        return null;
    }
    let country = (await response.json())[0];
    country.borders ??= [];
    return country;
}

export function countryId(code: Cca3Code) {
    return code.toLowerCase();
}
