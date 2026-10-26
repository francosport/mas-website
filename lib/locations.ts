export interface Location {
  slug: string;
  name: string;
  state: string;
  county: string;
  medianIncome: number;
  incomeYear: number;
  isPriority: boolean; // top 10 by income = priority page
  description: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
}

// Ranked by median household income (ACS 2023–2024)
export const LOCATIONS: Location[] = [
  {
    slug: "mitchellville",
    name: "Mitchellville",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 149347,
    incomeYear: 2023,
    isPriority: true,
    description:
      "Mitchellville is one of the highest-income communities in Prince George's County, known for executive homes, upscale neighborhoods, and premium appliances that require expert care.",
    neighborhoods: ["Lake Arbor", "Woodmore", "Glenn Dale"],
    nearbyAreas: ["Bowie", "Upper Marlboro", "Lanham"],
    zipCodes: ["20721"],
    metaTitle: "Appliance Repair in Mitchellville MD",
    metaDescription:
      "Expert appliance repair in Mitchellville, MD. Refrigerator, washer, dryer, oven, and more. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "bowie",
    name: "Bowie",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 141995,
    incomeYear: 2024,
    isPriority: true,
    description:
      "Bowie is one of Maryland's largest cities, home to thousands of single-family homes with modern appliances that require regular maintenance and professional repair.",
    neighborhoods: ["Belair at Bowie", "White Marsh", "Pointer Ridge", "Bowie Town Center area"],
    nearbyAreas: ["Mitchellville", "Upper Marlboro", "Lanham"],
    zipCodes: ["20715", "20716", "20720", "20721"],
    metaTitle: "Appliance Repair in Bowie MD",
    metaDescription:
      "Fast appliance repair in Bowie, MD. Refrigerator, washer, dryer, oven, dishwasher repair. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "clinton",
    name: "Clinton",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 124803,
    incomeYear: 2024,
    isPriority: true,
    description:
      "Clinton is a thriving suburban community in southern Prince George's County, with established neighborhoods and growing residential areas that rely on dependable appliance repair.",
    neighborhoods: ["Clinton Hills", "Brandywine", "Rosaryville"],
    nearbyAreas: ["Upper Marlboro", "District Heights", "Waldorf"],
    zipCodes: ["20735"],
    metaTitle: "Appliance Repair in Clinton MD",
    metaDescription:
      "Reliable appliance repair in Clinton, MD. Expert service for washers, dryers, refrigerators, ovens, and more. OEM parts, 1-year warranty. (240) 859-1014.",
  },
  {
    slug: "upper-marlboro",
    name: "Upper Marlboro",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 116875,
    incomeYear: 2024,
    isPriority: true,
    description:
      "Upper Marlboro is the county seat of Prince George's County, featuring large residential estates and newer development communities with high-end appliances that need careful, experienced repair. The 20774 ZIP code covers both Upper Marlboro and the Largo community, where Metro Appliance Services is based, so we are close by for most of the area.",
    neighborhoods: ["Marlboro Meadows", "Cabin Branch", "Parkside"],
    nearbyAreas: ["Bowie", "Mitchellville", "Clinton", "Largo"],
    zipCodes: ["20772", "20774"],
    metaTitle: "Appliance Repair in Upper Marlboro MD",
    metaDescription:
      "Appliance repair in Upper Marlboro, MD. Refrigerator, washer, dryer, oven repair. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "waldorf",
    name: "Waldorf",
    state: "MD",
    county: "Charles County",
    medianIncome: 115453,
    incomeYear: 2023,
    isPriority: true,
    description:
      "Waldorf is one of Maryland's fastest-growing communities, with extensive residential development and a strong base of homeowners who depend on timely appliance repair services.",
    neighborhoods: ["St. Charles", "Acton", "Brandywine"],
    nearbyAreas: ["Clinton", "Brandywine", "La Plata"],
    zipCodes: ["20601", "20602", "20603"],
    metaTitle: "Appliance Repair in Waldorf MD",
    metaDescription:
      "Fast appliance repair in Waldorf, MD. Expert repair for all major appliances and brands. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "washington-dc",
    name: "Washington",
    state: "DC",
    county: "District of Columbia",
    medianIncome: 109870,
    incomeYear: 2024,
    isPriority: true,
    description:
      "Washington, DC homeowners and renters depend on reliable appliances in row houses, condos, and apartments throughout the District. Metro Appliance Services provides fast, reliable repair across DC neighborhoods.",
    neighborhoods: ["Capitol Hill", "Columbia Heights", "Southeast DC", "Northeast DC", "Anacostia"],
    nearbyAreas: ["Hyattsville", "Silver Spring", "Capitol Heights", "Riverdale"],
    zipCodes: ["20001", "20002", "20003", "20019", "20020"],
    metaTitle: "Appliance Repair in Washington DC",
    metaDescription:
      "Professional appliance repair in Washington, DC. We service all DC neighborhoods — refrigerators, washers, dryers, ovens, and more. Call (240) 859-1014.",
  },
  {
    slug: "largo",
    name: "Largo",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 106875,
    incomeYear: 2023,
    isPriority: true,
    description:
      "Largo is home to Metro Appliance Services headquarters. Largo shares ZIP code 20774 with Upper Marlboro and is recognized by Google as part of the broader Upper Marlboro area. As our home base, Largo residents enjoy our fastest response times and same-day availability for urgent appliance repairs.",
    neighborhoods: ["Lake Arbor", "Kettering", "Perrywood", "Largo Town Center"],
    nearbyAreas: ["Upper Marlboro", "Mitchellville", "Lanham", "Bowie"],
    zipCodes: ["20774"],
    metaTitle: "Appliance Repair in Largo MD (20774)",
    metaDescription:
      "Metro Appliance Services is based in Largo, MD. Fast appliance repair with OEM parts and 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "riverdale",
    name: "Riverdale",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 104583,
    incomeYear: 2023,
    isPriority: true,
    description:
      "Riverdale Park is a growing community near the University of Maryland corridor, with a mix of established homes and newer residences that benefit from professional appliance repair services.",
    neighborhoods: ["Riverdale Park", "Calvert Hills", "University Park"],
    nearbyAreas: ["College Park", "Hyattsville", "Lanham"],
    zipCodes: ["20737"],
    metaTitle: "Appliance Repair in Riverdale MD",
    metaDescription:
      "Appliance repair in Riverdale, MD and Riverdale Park. Expert service for all major brands. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "silver-spring",
    name: "Silver Spring",
    state: "MD",
    county: "Montgomery County",
    medianIncome: 99860,
    incomeYear: 2024,
    isPriority: true,
    description:
      "Silver Spring is a vibrant, diverse community with thousands of residential units ranging from single-family homes to high-rise condos — all with appliances that need expert care.",
    neighborhoods: ["Downtown Silver Spring", "Woodside", "Four Corners", "Colesville"],
    nearbyAreas: ["Hyattsville", "Takoma Park", "College Park"],
    zipCodes: ["20901", "20902", "20903", "20904", "20905", "20906", "20910"],
    metaTitle: "Appliance Repair in Silver Spring MD",
    metaDescription:
      "Expert appliance repair in Silver Spring, MD. Refrigerators, washers, dryers, ovens, dishwashers. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "glenarden",
    name: "Glenarden",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 96875,
    incomeYear: 2023,
    isPriority: true,
    description:
      "Glenarden is a tight-knit residential community in Prince George's County with established single-family neighborhoods that rely on dependable, locally-owned appliance repair services.",
    neighborhoods: ["Glenarden Hills", "Carrollton"],
    nearbyAreas: ["Lanham", "Hyattsville", "Riverdale"],
    zipCodes: ["20706"],
    metaTitle: "Appliance Repair in Glenarden MD",
    metaDescription:
      "Local appliance repair in Glenarden, MD. Expert technicians for all major appliances and brands. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  // Standard pages (remaining 7)
  {
    slug: "lanham",
    name: "Lanham",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 93083,
    incomeYear: 2023,
    isPriority: false,
    description:
      "Lanham is a residential community conveniently located between Largo and Riverdale, with easy access to our service area.",
    neighborhoods: ["Seabrook", "Ardmore"],
    nearbyAreas: ["Largo", "Glenarden", "Riverdale"],
    zipCodes: ["20706"],
    metaTitle: "Appliance Repair in Lanham MD",
    metaDescription:
      "Appliance repair in Lanham, MD. Expert service for washers, dryers, refrigerators, and ovens. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "hyattsville",
    name: "Hyattsville",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 91941,
    incomeYear: 2023,
    isPriority: false,
    description:
      "Hyattsville is an arts-forward community near Washington, DC with a mix of historic homes and modern residences served by our DMV appliance repair team.",
    neighborhoods: ["Arts District", "Ager Road", "Queens Chapel"],
    nearbyAreas: ["Riverdale", "College Park", "Silver Spring"],
    zipCodes: ["20781", "20782", "20783", "20784"],
    metaTitle: "Appliance Repair in Hyattsville MD",
    metaDescription:
      "Expert appliance repair in Hyattsville, MD. All major brands and appliance types. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "capitol-heights",
    name: "Capitol Heights",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 91938,
    incomeYear: 2023,
    isPriority: false,
    description:
      "Capitol Heights is a residential community on the DC border, served by our Greater DMV appliance repair team.",
    neighborhoods: ["Capitol Heights", "Walker Mill"],
    nearbyAreas: ["District Heights", "Seat Pleasant", "Washington DC"],
    zipCodes: ["20743"],
    metaTitle: "Appliance Repair in Capitol Heights MD",
    metaDescription:
      "Appliance repair in Capitol Heights, MD. We service all major brands. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "district-heights",
    name: "District Heights",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 81750,
    incomeYear: 2023,
    isPriority: false,
    description:
      "District Heights is a residential community in central Prince George's County, within our core service area.",
    neighborhoods: ["Forestville", "Silver Hill"],
    nearbyAreas: ["Capitol Heights", "Suitland", "Clinton"],
    zipCodes: ["20747"],
    metaTitle: "Appliance Repair in District Heights MD",
    metaDescription:
      "Appliance repair in District Heights, MD. Expert technicians for all major appliances. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "suitland",
    name: "Suitland",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 71886,
    incomeYear: 2023,
    isPriority: false,
    description:
      "Suitland is home to the U.S. Census Bureau and a growing residential community served by Metro Appliance Services.",
    neighborhoods: ["Suitland", "Hillcrest Heights"],
    nearbyAreas: ["District Heights", "Capitol Heights", "Seat Pleasant"],
    zipCodes: ["20746"],
    metaTitle: "Appliance Repair in Suitland MD",
    metaDescription:
      "Appliance repair in Suitland, MD. Fast service for washers, dryers, refrigerators, and more. OEM parts. Call (240) 859-1014.",
  },
  {
    slug: "college-park",
    name: "College Park",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 69721,
    incomeYear: 2024,
    isPriority: false,
    description:
      "College Park is home to the University of Maryland and a vibrant residential community served by Metro Appliance Services.",
    neighborhoods: ["Old Town", "College Park Woods", "Berwyn"],
    nearbyAreas: ["Hyattsville", "Riverdale", "Greenbelt"],
    zipCodes: ["20740", "20742"],
    metaTitle: "Appliance Repair in College Park MD",
    metaDescription:
      "Appliance repair in College Park, MD. Expert service near UMD. All major brands, OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "seat-pleasant",
    name: "Seat Pleasant",
    state: "MD",
    county: "Prince George's County",
    medianIncome: 54076,
    incomeYear: 2023,
    isPriority: false,
    description:
      "Seat Pleasant is a small city on the DC border served by Metro Appliance Services' Greater DMV repair team.",
    neighborhoods: ["Seat Pleasant"],
    nearbyAreas: ["Capitol Heights", "District Heights", "Washington DC"],
    zipCodes: ["20743"],
    metaTitle: "Appliance Repair in Seat Pleasant MD",
    metaDescription:
      "Appliance repair in Seat Pleasant, MD. Expert technicians for all major appliances. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug);
}

export function getPriorityLocations(): Location[] {
  return LOCATIONS.filter((l) => l.isPriority);
}
