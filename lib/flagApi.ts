// Country flag API utility
// Using REST Countries API for flag data

export interface CountryFlag {
  name: string;
  flag: string; // Emoji flag
  code: string; // ISO country code
}

export const countries: Record<string, CountryFlag> = {
  france: {
    name: "France",
    flag: "🇫🇷",
    code: "FR",
  },
  nigeria: {
    name: "Nigeria",
    flag: "🇳🇬",
    code: "NG",
  },
};

// Alternative: Fetch from REST Countries API
export async function fetchCountryFlag(countryCode: string): Promise<string | null> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data[0]?.flag || null;
  } catch (error) {
    console.error("Error fetching flag:", error);
    return null;
  }
}

// Get flag emoji (fallback to static)
export function getCountryFlag(countryName: string): string {
  const normalized = countryName.toLowerCase();
  if (normalized.includes("france")) {
    return countries.france.flag;
  }
  if (normalized.includes("nigeria")) {
    return countries.nigeria.flag;
  }
  return "🌍";
}
