// Blog posts. Every business fact here (prices, fees, warranty, service area)
// must match lib/services.ts and the terms page. Do not add claims the owner
// has not confirmed: no certifications, no licensing, no same-day promises.

export interface PostSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  // The direct answer, shown first. Assistants and search snippets quote it.
  answer: string;
  sections: PostSection[];
  relatedService: { slug: string | null; name: string; href: string };
}

const CALL_TO_ACTION =
  "Call or text (240) 859-1014, Monday–Friday 8 AM–6 PM, or book online. We serve Largo, Bowie, Upper Marlboro, Silver Spring, Washington, DC and 12 more communities in Prince George's County and beyond.";

const PRICING_LINE =
  "The service call is $85, and it's waived if you go ahead with the repair. You get the full price before any work starts.";

export const POSTS: Post[] = [
  {
    slug: "refrigerator-not-cooling",
    title: "Why Your Refrigerator Isn't Cooling (And What to Do)",
    metaTitle: "Refrigerator Not Cooling? Causes & Fixes",
    metaDescription:
      "Freezer cold but fridge warm? The usual causes are an evaporator fan, a clogged defrost drain or a damper. Three checks to try first, and what repair costs.",
    datePublished: "2026-10-26",
    answer:
      "If your freezer is cold but the fridge side is warm, the cause is usually a failed evaporator fan motor, a clogged defrost drain, or a bad damper control. All three stop cold air from moving from the freezer into the fridge.",
    sections: [
      {
        heading: "Check these three things first",
        paragraphs: ["These take about five minutes and need no tools."],
        list: [
          "Is anything blocking the vents? An overfilled freezer can block the air path into the fridge. Move items away from the back wall.",
          "Listen at the freezer. With the door shut, you should hear a fan running. Silence, or a squeal or click, points to the evaporator fan motor.",
          "Look for frost. Heavy frost on the freezer's back panel usually means the defrost system has failed and ice is blocking the airflow.",
        ],
      },
      {
        heading: "When to stop and call",
        paragraphs: [
          "If none of that fixes it within a few hours, keep the doors shut as much as you can and call. Food kept above 40°F starts to spoil, and opening the doors to check makes it warm up faster.",
          "If both the fridge and the freezer are warm, the problem is more likely the compressor, the condenser fan or the start relay. That needs a technician.",
        ],
      },
      {
        heading: "What the repair usually costs",
        paragraphs: [
          `Most refrigerator repairs in Maryland and Washington, DC run $150 to $400, depending on the part. ${PRICING_LINE}`,
        ],
      },
      {
        heading: "Repair or replace?",
        paragraphs: [
          "If the repair costs less than half the price of a new fridge and the unit is under about 10 years old, repairing it is almost always the better deal. A new refrigerator typically runs $800 to $2,500 or more. If replacing makes more sense, we'll tell you.",
        ],
      },
    ],
    relatedService: { slug: "refrigerator-repair", name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
  },
  {
    slug: "how-often-clean-dryer-vent",
    title: "How Often Should You Clean Your Dryer Vent?",
    metaTitle: "How Often to Clean a Dryer Vent",
    metaDescription:
      "Clean your dryer vent at least once a year, and sooner if clothes take more than one cycle to dry. Warning signs, why it matters, and what it costs in the DMV.",
    datePublished: "2026-10-26",
    answer:
      "Clean your dryer vent at least once a year. Do it sooner if clothes take more than one cycle to dry, the dryer feels very hot on the outside, or you notice a burning smell.",
    sections: [
      {
        heading: "The lint screen isn't enough",
        paragraphs: [
          "Cleaning the lint screen after every load is important, but some lint always gets past it. That lint builds up inside the duct that runs from the back of the dryer to the outside of the house. Long duct runs and runs with several bends clog fastest.",
        ],
      },
      {
        heading: "Signs your vent needs cleaning now",
        list: [
          "Clothes take two or more cycles to dry",
          "The dryer runs hot but clothes stay damp",
          "A burning smell while the dryer runs",
          "The outside vent flap barely opens when the dryer is on",
          "Lint collecting around the outside vent or behind the dryer",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Lint is highly flammable. The U.S. Fire Administration lists failure to clean as the leading cause of home clothes dryer fires. A clogged vent also makes the dryer run longer and work harder, which wears out heating elements, thermal fuses and belts sooner.",
        ],
      },
      {
        heading: "What dryer vent cleaning costs",
        paragraphs: [
          "Dryer vent cleaning in the DMV typically costs $99 to $149 for a standard single-dryer vent run. We'll give you an exact quote when you schedule.",
        ],
      },
    ],
    relatedService: { slug: "dryer-vent-cleaning", name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning" },
  },
  {
    slug: "signs-washer-needs-repair",
    title: "5 Signs Your Washer Needs Professional Repair",
    metaTitle: "5 Signs Your Washer Needs Repair",
    metaDescription:
      "A washer that won't drain, won't spin, leaks, bangs loudly or shows an error code usually needs a repair. What each sign means and what you can check first.",
    datePublished: "2026-10-26",
    answer:
      "Call for washer repair if it won't drain, won't spin, leaks onto the floor, bangs or grinds during the spin cycle, or keeps showing the same error code. Each of these usually points to a specific failed part.",
    sections: [
      {
        heading: "1. Water stays in the drum after the cycle",
        paragraphs: [
          "Check the drain hose for kinks and, on front-loaders, clean the drain pump filter behind the small door at the bottom front. If the water still won't drain, the drain pump has likely failed.",
        ],
      },
      {
        heading: "2. It won't spin or agitate",
        paragraphs: [
          "A load that's too small or too lopsided can stop the spin, so redistribute the clothes and try again. If it still won't spin, common causes are a worn drive belt, a failed lid switch or door lock, or a motor coupler.",
        ],
      },
      {
        heading: "3. Water on the floor",
        paragraphs: [
          "Look at the fill hoses behind the machine first; a loose or cracked hose is the easiest fix. On front-loaders, a torn door boot seal is a common cause. A leak from underneath can mean a pump or tub seal.",
        ],
      },
      {
        heading: "4. Loud banging or grinding",
        paragraphs: [
          "Banging during spin is often an unbalanced load. If it happens with every load, the shock absorbers, suspension springs or drum bearings may be worn. Grinding that gets louder over time usually means bearings, and running the washer that way can damage the tub.",
        ],
      },
      {
        heading: "5. The same error code keeps coming back",
        paragraphs: [
          "Error codes tell a technician where to look. Write the code down before you call; it can save time on the visit. Turning the washer off and on may clear a code once, but a code that returns means a real fault.",
        ],
      },
      {
        heading: "What a visit looks like",
        paragraphs: [
          `We repair front-load and top-load washers from all major brands. ${PRICING_LINE} Most repairs carry our one-year limited parts-and-labor warranty.`,
        ],
      },
    ],
    relatedService: { slug: "washer-repair", name: "Washer Repair", href: "/services/washer-repair" },
  },
  {
    slug: "repair-or-replace-appliance",
    title: "Repair or Replace? The 50% Rule for Your Appliances",
    metaTitle: "Repair or Replace an Appliance? The 50% Rule",
    metaDescription:
      "If a repair costs less than half the price of a new appliance and the unit is under about 10 years old, repair it. How to apply the rule, and when replacing wins.",
    datePublished: "2026-10-26",
    answer:
      "If the repair costs less than 50% of the price of a new appliance and the appliance is under about 10 years old, repairing it is almost always the better financial choice.",
    sections: [
      {
        heading: "How to use the rule",
        paragraphs: [
          "Start with the repair quote and the price of a comparable new model. A refrigerator repair is usually $150 to $400, and a new refrigerator typically costs $800 to $2,500 or more, so most fridge repairs clear the rule easily. Count delivery, installation and haul-away of the old unit in the replacement price; they add up.",
        ],
      },
      {
        heading: "When replacing makes more sense",
        list: [
          "The repair costs more than half the price of a new unit",
          "The appliance is well past 10 years old and other parts are wearing out",
          "It's the second or third major repair in a short time",
          "Parts for the model are no longer made",
          "You want features or efficiency the old unit can't give you",
        ],
      },
      {
        heading: "When repairing is the clear winner",
        paragraphs: [
          "High-end and built-in appliances usually cost far more to replace than to repair, and replacing them can mean cabinet work. A repair with OEM or manufacturer-approved parts and a one-year parts-and-labor warranty usually gives you years more use.",
        ],
      },
      {
        heading: "An honest answer either way",
        paragraphs: [
          `Every visit starts with a diagnosis, and you get the full repair price before any work starts. If our professional opinion is that you should replace the appliance, we'll say so rather than sell you a repair that doesn't make sense. ${PRICING_LINE}`,
        ],
      },
    ],
    relatedService: { slug: "refrigerator-repair", name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
  },
  {
    slug: "gas-vs-electric-appliance-repair",
    title: "Gas vs. Electric: Which Appliances Are Cheaper to Repair?",
    metaTitle: "Gas vs. Electric Appliance Repair Costs",
    metaDescription:
      "Gas and electric ranges and dryers cost about the same to repair. The parts that fail are different. Typical DMV repair ranges, and what to do if you smell gas.",
    datePublished: "2026-10-26",
    answer:
      "Gas and electric ranges and dryers cost about the same to repair. Oven and range repairs typically run $130 to $400 and dryer repairs $120 to $350, whichever fuel they use. What differs is which parts tend to fail.",
    sections: [
      {
        heading: "What usually fails on gas appliances",
        list: [
          "Oven igniters that glow but don't light the burner, or don't glow at all",
          "Surface burner igniters that click constantly or not at all",
          "Gas valves and safety valves",
          "On gas dryers, igniters and the gas valve coils that open the burner",
        ],
      },
      {
        heading: "What usually fails on electric appliances",
        list: [
          "Bake and broil elements that burn out",
          "Surface element switches that stop controlling the heat",
          "Control boards and temperature sensors",
          "On electric dryers, the heating element and thermal fuses",
        ],
      },
      {
        heading: "If you smell gas",
        paragraphs: [
          "Don't try to find the leak yourself. Don't switch lights or appliances on or off. Leave the house, then call your gas utility's emergency line or 911 from outside. Appliance repair comes after the utility has made it safe.",
        ],
      },
      {
        heading: "Cooktops",
        paragraphs: [
          "Cooktop repairs typically run $120 to $350, for gas, electric and induction. Glass-top replacement is priced separately and depends on the model.",
        ],
      },
      {
        heading: "What a visit costs",
        paragraphs: [PRICING_LINE],
      },
    ],
    relatedService: { slug: "range-oven-repair", name: "Range & Oven Repair", href: "/services/range-oven-repair" },
  },
  {
    slug: "choose-appliance-repair-company",
    title: "How to Choose an Appliance Repair Company in Prince George's County",
    metaTitle: "How to Choose an Appliance Repair Company",
    metaDescription:
      "Ask about the service call fee, the warranty in writing, the parts used and insurance, and read recent reviews. A checklist for Prince George's County homeowners.",
    datePublished: "2026-10-26",
    answer:
      "Before you book, ask four things: what the service call costs and whether it's credited toward the repair, what the warranty covers and for how long, whether they use OEM parts, and whether they're insured. Then read their recent reviews.",
    sections: [
      {
        heading: "1. The service call fee",
        paragraphs: [
          "Almost every company charges for the first visit. What matters is whether that fee is credited toward the repair if you go ahead. Ours is $85, and you pay that or the repair, never both.",
        ],
      },
      {
        heading: "2. The warranty, in writing",
        paragraphs: [
          "Ask how long the warranty lasts, whether it covers parts and labor, and what it excludes. Many companies offer 30 to 90 days. We give a one-year limited warranty on parts and labor, with the exclusions written in our terms.",
        ],
      },
      {
        heading: "3. The parts",
        paragraphs: [
          "OEM (original equipment manufacturer) or manufacturer-approved parts fit properly and tend to last. Ask what the company uses, and whether they'll tell you before using anything else.",
        ],
      },
      {
        heading: "4. Insurance",
        paragraphs: [
          "Maryland has no state license specifically for appliance repair, so a \"licensed\" claim doesn't tell you much. Insurance does: it protects your home if something goes wrong during the repair. Ask for it.",
        ],
      },
      {
        heading: "5. Recent reviews",
        paragraphs: [
          "Read the most recent reviews on Google, not just the star rating. Look for reviews that name the appliance and describe what happened. That shows how the company handles real problems.",
        ],
      },
      {
        heading: "6. Who actually shows up",
        paragraphs: [
          "Ask whether a dispatcher sends whoever is free or the same technician handles your job start to finish. At Metro Appliance Services, Frank, the owner, does every service call himself.",
        ],
      },
    ],
    relatedService: { slug: null, name: "All Our Services", href: "/services" },
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPostsForService(serviceSlug: string): Post[] {
  return POSTS.filter((p) => p.relatedService.slug === serviceSlug);
}

export { CALL_TO_ACTION };
