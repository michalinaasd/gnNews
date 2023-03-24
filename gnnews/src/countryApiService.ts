export interface Country {
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: unknown;
    official: string;
  };
}

export async function getCountriesWithFlags(): Promise<Country[] | null> {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
}
