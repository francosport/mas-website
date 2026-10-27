export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // emoji fallback
  symptoms: string[];
  brands: string[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: Service[] = [
  {
    slug: "refrigerator-repair",
    name: "Refrigerator Repair",
    shortName: "Refrigerator",
    tagline: "Stop food spoilage before it costs you more",
    description:
      "Fast refrigerator repair in the DMV area. We fix temperature issues, compressor failures, ice maker problems, and more — experienced technicians, OEM parts.",
    longDescription: `A failing refrigerator isn't just an inconvenience — it's hundreds of dollars of food at risk. Metro Appliance Services technicians diagnose and repair all major refrigerator types: top-freezer, bottom-freezer, French door, and side-by-side units.

**Common problems we fix:**
We address temperature inconsistencies (fridge too warm, freezer not freezing), compressor failures, condenser and evaporator fan motor issues, defrost system malfunctions, ice maker and water dispenser problems, door gasket replacements, and unusual noises.

**Our repair process:**
Every repair starts with a full diagnostic visit ($85, waived when you go ahead with the repair). We use OEM or manufacturer-approved parts to ensure your refrigerator runs as intended. Most repairs are backed by our one-year parts-and-labor warranty.

**Brands we service:**
Samsung, LG, GE, Whirlpool, Maytag, Frigidaire, Electrolux, KitchenAid, Kenmore, and Jenn-Air — among others.

**Why repair rather than replace?**
A new refrigerator typically costs $800–$2,500+. Most refrigerator repairs cost a fraction of that. With our transparent, upfront pricing and OEM parts, you get years of reliable performance at a fraction of replacement cost.`,
    icon: "🧊",
    symptoms: [
      "Food spoiling faster than usual",
      "Fridge not cooling, freezer not freezing",
      "Water leaking onto floor",
      "Ice maker not working",
      "Unusual noises or vibrations",
      "Door not sealing properly",
    ],
    brands: ["Samsung", "LG", "GE", "Whirlpool", "Maytag", "Frigidaire", "Electrolux", "KitchenAid", "Kenmore", "Jenn-Air"],
    faqs: [
      {
        question: "How much does refrigerator repair cost in the DMV area?",
        answer:
          "Most refrigerator repairs in Maryland and Washington, DC run $150 to $400, depending on the part and labor. The service call is $85. If you go ahead with the repair, you pay the repair price only, never both. You get the full price before any work starts.",
      },
      {
        question: "Is it worth repairing a refrigerator or should I replace it?",
        answer:
          "If the repair cost is less than 50% of the cost of a new unit, repair is almost always the better financial decision. We'll give you an honest assessment — if it makes more sense to replace, we'll tell you.",
      },
      {
        question: "How quickly can Metro Appliance Services fix my refrigerator?",
        answer:
          "We work to accommodate your schedule as quickly as possible throughout the Greater DMV area. In many cases, repairs are completed in a single visit. Call (240) 859-1014 to schedule.",
      },
      {
        question: "Do you use original manufacturer parts for refrigerator repairs?",
        answer:
          "Yes. We use OEM (original equipment manufacturer) or manufacturer-approved parts on all repairs to ensure proper fit, performance, and longevity.",
      },
      {
        question: "What warranty do you offer on refrigerator repairs?",
        answer:
          "Most repairs include a one-year warranty on both parts and labor. If the same issue returns within a year, we come back at no additional charge.",
      },
    ],
    metaTitle: "Refrigerator Repair in Largo MD",
    metaDescription:
      "Fast refrigerator repair in Largo, MD and the greater DMV area. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "washer-repair",
    name: "Washer Repair",
    shortName: "Washer",
    tagline: "Get your laundry routine back on track",
    description:
      "Expert washing machine repair for front-load and top-load units. We fix leaks, spin failures, error codes, and electrical issues — experienced technicians, OEM parts.",
    longDescription: `A broken washing machine can disrupt your entire household routine. Metro Appliance Services repairs all types of washing machines — top-load, front-load, HE (high-efficiency), and compact units — across all major brands.

**Common problems we fix:**
Washer not spinning or agitating, drum not draining, leaking water, loud banging or vibration during spin, error codes (F21, E1, UE, etc.), lid or door lock failures, control board malfunctions, and water inlet valve issues.

**Our repair process:**
Our technicians arrive with fully-stocked service vehicles carrying the most common replacement parts, so most repairs are completed in a single visit. We perform a thorough diagnostic, explain your options, and only proceed with your approval.

**Brands we service:**
Samsung, LG, Whirlpool, Maytag, GE, Frigidaire, Electrolux, KitchenAid, Kenmore, and Speed Queen.

**One-year warranty on most repairs:**
Most repairs are backed by our one-year parts-and-labor warranty. Your satisfaction is guaranteed.`,
    icon: "🫧",
    symptoms: [
      "Washer won't spin or agitate",
      "Drum not draining after cycle",
      "Water leaking from machine",
      "Loud noise during spin cycle",
      "Error codes on display",
      "Door or lid won't lock/unlock",
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Frigidaire", "Electrolux", "Kenmore"],
    faqs: [
      {
        question: "Why is my washing machine not spinning?",
        answer:
          "A washer that won't spin is often caused by an off-balance load, a faulty lid switch or door latch, a worn drive belt, or a failed motor coupling. Our technician will diagnose the root cause and fix it in most cases on the same visit.",
      },
      {
        question: "Is it worth repairing an older washing machine?",
        answer:
          "If your washer is under 10 years old and the repair cost is less than half the price of a new unit, repair is almost always worth it. We'll give you an honest recommendation based on the machine's age and condition.",
      },
      {
        question: "How long does a washer repair take?",
        answer:
          "Most washer repairs are completed in 1–2 hours during a single visit. We stock common parts on our service vehicles to minimize return trips.",
      },
      {
        question: "Do you repair both front-load and top-load washers?",
        answer:
          "Yes. We repair all washer types including top-load, front-load, HE, and compact models across all major brands.",
      },
      {
        question: "What areas do you serve for washer repair?",
        answer:
          "We serve Largo, Bowie, Mitchellville, Upper Marlboro, Clinton, Waldorf, Silver Spring, Washington DC, and all surrounding communities in Prince George's County and the DMV area.",
      },
    ],
    metaTitle: "Washer Repair in Largo MD",
    metaDescription:
      "Expert washer repair in Largo, MD and the greater DMV. We fix all brands — front-load, top-load, HE. OEM parts, 1-year warranty. (240) 859-1014.",
  },
  {
    slug: "dryer-repair",
    name: "Dryer Repair",
    shortName: "Dryer",
    tagline: "Clothes still damp? We'll get it drying again",
    description:
      "Professional dryer repair for electric and gas units across the DMV. We diagnose heating failures, drum issues, and mechanical problems — fast.",
    longDescription: `Damp clothes after a full cycle or a dryer that won't start at all — both are fixable. Metro Appliance Services repairs electric and gas dryers of all makes and models.

**Common problems we fix:**
Dryer not heating, dryer not starting, drum not turning, overheating or shutting off mid-cycle, takes too long to dry, unusual squeaking or thumping noises, error codes, and gas igniter failures.

**Safety first:**
A dryer that doesn't heat properly or runs too hot can be a fire hazard. Don't delay — our technicians are trained to identify and fix safety issues on the first visit.

**Brands we service:**
Samsung, LG, Whirlpool, Maytag, GE, Frigidaire, Electrolux, Kenmore, and Speed Queen.

**Gas and electric:**
We repair both gas and electric dryers. We are experienced with gas appliances and follow safe gas-handling practices on every job.`,
    icon: "♨️",
    symptoms: [
      "Clothes still damp after a full cycle",
      "Dryer won't start",
      "Drum not turning",
      "Overheating or shutting off mid-cycle",
      "Loud squeaking or thumping",
      "Error codes on display",
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Frigidaire", "Electrolux", "Kenmore"],
    faqs: [
      {
        question: "Why is my dryer not heating?",
        answer:
          "The most common causes are a blown thermal fuse, failed heating element (electric), faulty gas igniter, or a clogged vent restricting airflow. Our technician will diagnose and fix the issue in a single visit.",
      },
      {
        question: "Is a dryer that takes too long to dry a fire risk?",
        answer:
          "It can be. Restricted airflow (often from a clogged vent) forces the dryer to run longer and hotter, increasing the risk of overheating. We recommend addressing the issue promptly.",
      },
      {
        question: "Do you repair gas dryers?",
        answer:
          "Yes. Our technicians are trained and equipped to safely repair both gas and electric dryers.",
      },
      {
        question: "How much does dryer repair typically cost?",
        answer:
          "Most dryer repairs in the DMV area range from $120 to $350. We provide an upfront quote after the diagnostic with no obligation to proceed.",
      },
      {
        question: "Can you fix my dryer the same day I call?",
        answer:
          "We work to accommodate your schedule as quickly as possible throughout the Greater DMV area. Call (240) 859-1014 to check current availability.",
      },
    ],
    metaTitle: "Dryer Repair in Largo MD",
    metaDescription:
      "Expert electric and gas dryer repair in Largo, MD and the DMV. We fix heating failures, drum issues, and more. OEM parts, 1-year warranty. (240) 859-1014.",
  },
  {
    slug: "range-oven-repair",
    name: "Range & Oven Repair",
    shortName: "Range/Oven",
    tagline: "Back to cooking — quickly and safely",
    description:
      "Range and oven repair for gas and electric units. We fix burners, igniters, control boards, and temperature issues — all brands, DMV-wide.",
    longDescription: `Whether your oven won't heat to the right temperature or your range burners won't ignite, Metro Appliance Services has the expertise to fix it right.

**Common problems we fix:**
Oven not heating or heating unevenly, burners not igniting on gas ranges, electric burner elements burning out, convection fan failures, oven door hinge and gasket issues, control board malfunctions, and self-clean cycle problems.

**Gas and electric:**
We repair all range and oven types — freestanding gas ranges, electric ranges, double ovens, wall ovens, and slide-in ranges across all major brands.

**Safety note:**
If you smell gas near your range, do not use the appliance and call your gas company immediately. For all other issues, our technicians will safely diagnose and repair the problem.

**Brands we service:**
Samsung, LG, GE, Whirlpool, Maytag, Frigidaire, KitchenAid, Jenn-Air, Bosch, and Wolf.`,
    icon: "🔥",
    symptoms: [
      "Oven not heating or heating unevenly",
      "Burners won't ignite",
      "Oven temperature off from setting",
      "Broiler not working",
      "Control board or display errors",
      "Oven door not closing properly",
    ],
    brands: ["Samsung", "LG", "GE", "Whirlpool", "Maytag", "Frigidaire", "KitchenAid", "Jenn-Air", "Bosch"],
    faqs: [
      {
        question: "Why is my oven not reaching the right temperature?",
        answer:
          "Uneven or insufficient oven temperatures are usually caused by a faulty bake or broil element (electric), a failing igniter (gas), a bad temperature sensor, or a malfunctioning control board. We'll pinpoint the cause during the diagnostic.",
      },
      {
        question: "Can you repair both gas and electric ovens?",
        answer:
          "Yes. We service all gas ranges, electric ranges, double ovens, wall ovens, and slide-in models from all major manufacturers.",
      },
      {
        question: "My gas burner clicks but won't light — what's wrong?",
        answer:
          "This is typically caused by a faulty igniter, a clogged burner cap, or moisture in the igniter assembly. In most cases, this is a straightforward repair completed in a single visit.",
      },
      {
        question: "How long does a range or oven repair take?",
        answer:
          "Most repairs are completed in 1–2 hours. We stock common parts on our service vehicles to minimize the need for return trips.",
      },
      {
        question: "What does oven repair cost in the DMV area?",
        answer:
          "Oven and range repairs typically range from $130 to $400 depending on the part needed. We provide a clear, upfront quote before any work begins.",
      },
    ],
    metaTitle: "Range & Oven Repair in Largo MD",
    metaDescription:
      "Gas and electric range and oven repair in Largo, MD and the DMV. Fix heating issues, igniters, and more. 1-year warranty. (240) 859-1014.",
  },
  {
    slug: "cooktop-stove-repair",
    name: "Cooktop & Stove Repair",
    shortName: "Cooktop",
    tagline: "Gas, electric, or induction — we fix them all",
    description:
      "Expert cooktop and stove repair for gas, electric, and induction units. Surface burner failures, ignition problems, and control issues resolved fast.",
    longDescription: `Cooktop failures disrupt meal preparation for the whole household. Metro Appliance Services diagnoses and repairs gas, electric coil, smooth-top (radiant electric), and induction cooktops.

**Common problems we fix:**
Burner not heating or staying lit, induction burner not detecting cookware, cracked glass on smooth-top, igniter clicking constantly, control knob failures, error codes on induction units, and uneven heat output.

**Induction cooktop specialists:**
Induction units require specialized knowledge. Our technicians are trained to diagnose and repair inverter board failures, control board issues, and sensor problems specific to induction technology.

**Brands we service:**
GE, Whirlpool, Bosch, Samsung, LG, Frigidaire, KitchenAid, Jenn-Air, Wolf, and Thermador.`,
    icon: "🍳",
    symptoms: [
      "Burner not heating properly",
      "Igniter clicking constantly",
      "Induction not detecting cookware",
      "Cracked smooth-top glass",
      "Control knobs not working",
      "Error codes on display",
    ],
    brands: ["GE", "Whirlpool", "Bosch", "Samsung", "LG", "Frigidaire", "KitchenAid", "Jenn-Air"],
    faqs: [
      {
        question: "Can you repair a cracked glass cooktop?",
        answer:
          "Yes. A cracked ceramic or glass cooktop surface can be replaced. We'll assess whether replacement is cost-effective vs. purchasing a new unit and give you an honest recommendation.",
      },
      {
        question: "Why does my gas cooktop igniter keep clicking?",
        answer:
          "A continuously clicking igniter is usually caused by moisture in the igniter assembly, a dirty burner cap, or a faulty spark module. This is a common repair we handle regularly.",
      },
      {
        question: "Do you repair induction cooktops?",
        answer:
          "Yes. We specialize in induction cooktop repairs including inverter board, control board, and sensor issues that are specific to induction technology.",
      },
      {
        question: "How much does cooktop repair cost?",
        answer:
          "Cooktop repairs typically range from $120 to $350 for most issues. Glass top replacement is priced separately and depends on the model.",
      },
      {
        question: "How soon can you come for a cooktop repair?",
        answer:
          "We work to schedule your appointment as quickly as possible throughout the Greater DMV. Call (240) 859-1014 to check availability.",
      },
    ],
    metaTitle: "Cooktop & Stove Repair in Largo MD",
    metaDescription:
      "Gas, electric, and induction cooktop repair in Largo, MD and the DMV. Expert diagnosis, OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "dishwasher-repair",
    name: "Dishwasher Repair",
    shortName: "Dishwasher",
    tagline: "Clean dishes every cycle, guaranteed",
    description:
      "Professional dishwasher repair for all major brands. We fix drainage failures, leaks, poor cleaning performance, and electronic issues — DMV-wide.",
    longDescription: `A malfunctioning dishwasher means hand-washing everything — and nobody wants that. Metro Appliance Services repairs dishwashers of all types and brands quickly and effectively.

**Common problems we fix:**
Dishwasher not cleaning dishes properly, not draining, leaking water, not starting, door latch failures, pump and motor issues, spray arm blockages, detergent dispenser not opening, and control board malfunctions.

**We handle the brands your kitchen uses:**
Samsung, LG, Bosch, GE, Whirlpool, Maytag, KitchenAid, Frigidaire, Electrolux, and Miele.

**What to expect:**
Our technician arrives, performs a thorough diagnostic, and explains the issue in plain English. Most dishwasher repairs are completed in a single visit using OEM parts. Most repairs are covered by our one-year limited warranty.`,
    icon: "🍽️",
    symptoms: [
      "Dishes coming out dirty or cloudy",
      "Dishwasher not draining",
      "Water pooling on the floor",
      "Won't start or complete a cycle",
      "Door not latching or sealing",
      "Unusual noise during operation",
    ],
    brands: ["Samsung", "LG", "Bosch", "GE", "Whirlpool", "Maytag", "KitchenAid", "Frigidaire", "Electrolux"],
    faqs: [
      {
        question: "Why are my dishes still dirty after the dishwasher runs?",
        answer:
          "Poor cleaning is usually caused by clogged spray arms, a failed wash pump, low water temperature, or a malfunctioning detergent dispenser. Our technician will identify the root cause and fix it.",
      },
      {
        question: "Why is my dishwasher not draining?",
        answer:
          "A dishwasher that won't drain is commonly caused by a clogged filter, a blocked drain hose, a faulty drain pump, or a garbage disposal connection issue. This is one of our most common repairs.",
      },
      {
        question: "Is it worth repairing a dishwasher?",
        answer:
          "If your dishwasher is under 10 years old and the repair is under $300, it's typically worth repairing. We'll give you an honest assessment and a clear upfront quote.",
      },
      {
        question: "Can you fix a Bosch dishwasher?",
        answer:
          "Yes. We repair Bosch, Miele, and all other major European and American dishwasher brands.",
      },
      {
        question: "Do you offer emergency dishwasher repair?",
        answer:
          "We work to accommodate urgent appointments, especially for water-related issues. Call (240) 859-1014 to discuss your situation.",
      },
    ],
    metaTitle: "Dishwasher Repair in Largo MD",
    metaDescription:
      "Expert dishwasher repair in Largo, MD and the DMV. Fix draining, leaks, poor cleaning, and more. OEM parts, 1-year warranty. Call (240) 859-1014.",
  },
  {
    slug: "garbage-disposal",
    name: "Garbage Disposal Service",
    shortName: "Garbage Disposal",
    tagline: "Humming, jammed, or leaking? Fixed fast",
    description:
      "Garbage disposal repair and installation across the DMV area. We fix jams, humming units, leaks, and complete failures — often in under an hour.",
    longDescription: `A jammed or leaking garbage disposal can shut down your kitchen sink entirely. Metro Appliance Services handles garbage disposal repairs and replacements quickly — most visits completed in under an hour.

**Common problems we fix:**
Disposal humming but not spinning (jammed), disposal leaking from the bottom or sides, not turning on, resetting frequently (overload), making grinding or rattling noises, and complete unit replacement when repair isn't cost-effective.

**Brands and models:**
InSinkErator (Badger, Evolution series), Moen, Waste King, KitchenAid, GE, Whirlpool, and others.

**Repair vs. replace:**
If your disposal is more than 8–10 years old or the motor has failed, replacement is often more cost-effective. We'll give you a clear recommendation and can install a new unit on the same visit.`,
    icon: "🔧",
    symptoms: [
      "Disposal hums but won't spin",
      "Leaking under the sink",
      "Won't turn on at all",
      "Frequently trips the reset button",
      "Grinding or rattling noises",
      "Foul odor from unit",
    ],
    brands: ["InSinkErator", "Moen", "Waste King", "KitchenAid", "GE", "Whirlpool"],
    faqs: [
      {
        question: "Why is my garbage disposal humming but not grinding?",
        answer:
          "A humming disposal that won't spin is almost always jammed. The motor is trying to turn but something is blocking the impellers. Do not continue running it — call us to unjam and inspect for damage.",
      },
      {
        question: "Can you fix a leaking garbage disposal?",
        answer:
          "Yes. Leaks from the bottom usually indicate a failed internal seal — the unit typically needs replacement. Leaks from the side or top are often fixable. We'll diagnose and give you your options.",
      },
      {
        question: "How long does garbage disposal repair take?",
        answer:
          "Most repairs or replacements are completed in 30–60 minutes. If a new unit is needed, we stock common models on our service vehicles.",
      },
      {
        question: "Should I repair or replace my garbage disposal?",
        answer:
          "If the unit is more than 8 years old or the motor has failed, replacement is usually the better value. We'll give you an honest recommendation.",
      },
      {
        question: "How much does garbage disposal repair cost?",
        answer:
          "Repairs typically range from $80 to $200. New unit installation ranges from $150 to $350 depending on the model.",
      },
    ],
    metaTitle: "Garbage Disposal Repair in Largo MD",
    metaDescription:
      "Garbage disposal repair and installation in Largo, MD and the DMV. Fix jams, leaks, and failures fast. Upfront pricing. Call (240) 859-1014.",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    shortName: "Dryer Vent",
    tagline: "Prevent fires. Improve efficiency. Breathe easier",
    description:
      "Professional dryer vent cleaning in the DMV area. Reduce fire risk, cut drying times, and extend your dryer's life. Recommended annually.",
    longDescription: `Clogged dryer vents are one of the leading causes of house fires in the United States. The U.S. Fire Administration reports that failure to clean dryer vents is the top cause of dryer fires. Metro Appliance Services provides thorough, professional dryer vent cleaning to keep your home safe.

**Signs your vent needs cleaning:**
Clothes taking more than one cycle to dry, dryer getting very hot to the touch, burning smell during operation, excessive lint around the dryer or laundry area, or the last cleaning was more than 12 months ago.

**Our cleaning process:**
We use professional-grade rotary brush systems to remove lint buildup from the entire vent run — from the dryer connection to the exterior vent cap. We also inspect the vent for kinks, disconnections, or improper materials (like plastic flex duct) that create hazards.

**Benefits of regular vent cleaning:**
- Dramatically reduces fire risk
- Cuts drying times by 20–50%
- Extends dryer motor life
- Reduces energy costs
- Prevents carbon monoxide issues in gas dryers

**Recommended frequency:**
Annual cleaning is recommended for most households. Families with large laundry loads or pets should consider cleaning every 6 months.`,
    icon: "💨",
    symptoms: [
      "Clothes take multiple cycles to dry",
      "Dryer runs hot but clothes stay damp",
      "Burning smell during drying",
      "Excessive lint near dryer",
      "Vent cleaning overdue (12+ months)",
      "High energy bills from laundry",
    ],
    brands: ["All brands and vent configurations"],
    faqs: [
      {
        question: "How often should I have my dryer vent cleaned?",
        answer:
          "The National Fire Protection Association recommends annual dryer vent cleaning. Households with heavy laundry use, pets, or long vent runs should consider cleaning every 6 months.",
      },
      {
        question: "How do I know if my dryer vent is clogged?",
        answer:
          "Key signs include clothes taking longer than one cycle to dry, the dryer running hot to the touch, a burning smell during operation, or visible lint accumulation around the exterior vent opening.",
      },
      {
        question: "Is clogged dryer vent really a fire hazard?",
        answer:
          "Yes — this is not an exaggeration. The U.S. Fire Administration reports that failure to clean dryer vents causes approximately 2,900 house fires per year. Lint is highly flammable and accumulates quickly.",
      },
      {
        question: "How long does dryer vent cleaning take?",
        answer:
          "A standard dryer vent cleaning takes 45–90 minutes depending on the vent length and configuration.",
      },
      {
        question: "How much does dryer vent cleaning cost?",
        answer:
          "Dryer vent cleaning in the DMV area typically costs $99–$149 for a standard single-dryer vent run. We'll provide an exact quote when you schedule.",
      },
    ],
    metaTitle: "Dryer Vent Cleaning in Largo MD",
    metaDescription:
      "Professional dryer vent cleaning in Largo, MD and the DMV. Reduce fire risk, cut drying times, OEM inspection. Annual cleaning recommended. (240) 859-1014.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
