export type Country = {
    name: {
        common: string;
        official: string;
        nativeName?: { [key: string]: { official: string; common: string } };
    };
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: string;
    unMember: boolean;
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: [number, number];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: {
        [key: string]: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini?: { [key: number]: number };
    fifa?: string;
    car: {
        signs?: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    coatOfArms: {
        png?: string;
        svg?: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng?: [number, number];
    };
    postalCode?: {
        format: string;
        regex?: string;
    };
};

export const getAllCountries = async (): Promise<Country[]> => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
        throw new Error(`Failed to fetch all countries data`);
    }
    const countries = await response.json();
    return countries;
};

export const getRegionData = async (region: string): Promise<any> => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch countries for region: ${region}`);
    }
    const countries = await response.json();
    return countries;
};
