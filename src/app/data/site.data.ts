export const site = {
  name: 'Malapascua Starlight Resort',
  url: 'https://sheigr.github.io/malapascua-starlight',
  tagline: 'Budget accommodation on Malapascua Island',
  phones: [
    { label: 'Philippines', display: '+63 916 317 0488', tel: '+639163170488' },
    { label: 'United States', display: '+1 951 388 7922', tel: '+19513887922' },
  ],
  address: {
    street: 'Barangay Logon',
    locality: 'Daanbantayan',
    region: 'Cebu',
    postalCode: '6013',
    country: 'Philippines',
    countryCode: 'PH',
  },
  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=124.100%2C11.318%2C124.140%2C11.348&layer=mapnik',
  mapLink: 'https://www.openstreetmap.org/search?query=Barangay%20Logon%20Malapascua%20Island',
};

export interface Room {
  slug: string;
  name: string;
  summary: string;
  size: string;
  sleeps: string;
  beds: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export const sharedRoomFeatures = [
  'Tinted windows with privacy drapes',
  'In-room safe',
  'Private restroom with hot and cold shower',
  'Air-conditioning',
];

export const rooms: Room[] = [
  {
    slug: 'superior-terrace',
    name: 'Superior Room, Terrace',
    summary: 'A compact garden room for two, with a terrace and two single beds.',
    size: 'About 17 sq m',
    sleeps: 'Sleeps 2',
    beds: '2 single beds',
    image: 'images/terrace.jpg',
    imageAlt: 'Timber terrace with two lounge chairs and a garden view',
    points: ['Garden view', 'Private terrace', 'Listed on booking sites at about 17 square meters'],
  },
  {
    slug: 'superior-balcony',
    name: 'Superior Room, Balcony',
    summary: 'The same smaller footprint, set up with one queen bed and a balcony.',
    size: 'About 17 sq m',
    sleeps: 'Sleeps 2',
    beds: '1 queen bed',
    image: 'images/room.jpg',
    imageAlt: 'Guest room with a made bed, white linen, and a window onto the garden',
    points: ['Garden view', 'Private balcony', 'Queen bed or a similar double setup'],
  },
  {
    slug: 'super-deluxe',
    name: 'Super Deluxe Room',
    summary: 'A larger room with a king bed, a sofa bed, and a furnished private terrace.',
    size: 'About 35 sq m',
    sleeps: 'Sleeps 3',
    beds: '1 king bed and 1 sofa bed',
    image: 'images/terrace.jpg',
    imageAlt: 'Furnished private terrace outside a larger guest room',
    points: [
      'Upholstered chairs, a sofa, or a sofa bed',
      'Large private terrace',
      'The resort describes four of these larger units',
    ],
  },
  {
    slug: 'super-deluxe-family',
    name: 'Super Deluxe Family Room',
    summary: 'The family layout of the larger room, with two queen beds for four guests.',
    size: 'About 35 sq m',
    sleeps: 'Sleeps 4',
    beds: '2 queen beds',
    image: 'images/room.jpg',
    imageAlt: 'Spacious guest room with white linen and warm wood',
    points: ['Garden view', 'Room for a family or a small group', 'Same terrace and furnishing idea as the other Super Deluxe units'],
  },
];

export const gallery = [
  {
    src: 'images/hero.jpg',
    alt: 'Low guest cottages, coconut palms, and evening lanterns beside the sand',
    caption: 'Evening along the cottages',
  },
  {
    src: 'images/garden.jpg',
    alt: 'Sandy path through the resort garden between cream guest buildings',
    caption: 'Garden path',
  },
  {
    src: 'images/room.jpg',
    alt: 'Air-conditioned guest room with a made bed and privacy drapes',
    caption: 'Guest room',
  },
  {
    src: 'images/terrace.jpg',
    alt: 'Private timber terrace with chairs looking toward the garden',
    caption: 'Private terrace',
  },
  {
    src: 'images/lounge.jpg',
    alt: 'Open-air lounge with wooden tables and a view into the garden',
    caption: 'Shared lounge',
  },
  {
    src: 'images/beach.jpg',
    alt: 'Sunrise on a white-sand beach with turquoise water and leaning palms',
    caption: 'A short walk to the beach',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Where is Malapascua Starlight Resort?',
    answer:
      'The resort is in Barangay Logon, Daanbantayan, on Malapascua Island, Cebu 6013. The public market sits across the main gate. Bounty Beach, restaurants, and dive shops are a short walk away.',
  },
  {
    question: 'How far is Bounty Beach?',
    answer:
      'Plan on about five to ten minutes on foot. The beach is the sandy shore where most dive boats and beach restaurants gather.',
  },
  {
    question: 'What is in the rooms?',
    answer:
      'The resort says every room has tinted windows with privacy drapes, an in-room safe, a private restroom with a hot and cold shower, and air-conditioning. Super Deluxe rooms add chairs, a sofa or sofa bed, and a large private terrace on four of the units.',
  },
  {
    question: 'What time is check-in and check-out?',
    answer:
      'Major booking sites list check-in from 12:00 noon and check-out before 11:00. Ask the resort to confirm those times for your dates, and tell them if your boat arrives late.',
  },
  {
    question: 'Is this a dive resort?',
    answer:
      'No. Starlight is a place to sleep near the dive shops. Thresher shark dives at Monad Shoal are arranged with a shop on the island, usually before dawn. The walk from the resort to those shops is a few minutes.',
  },
  {
    question: 'How do I get to Malapascua?',
    answer:
      'Fly into Mactan-Cebu International Airport, travel north to Maya Port in Daanbantayan, then take a daytime passenger boat to the island. The road leg is often three to four hours, and the boat is often thirty to forty-five minutes when the sea is calm. Boats do not run in heavy weather.',
  },
  {
    question: 'How do I book a room?',
    answer:
      'Call +63 916 317 0488 or +1 951 388 7922, or send the inquiry form on this site. The resort confirms the rate, the room, and how to pay. This site does not charge a card.',
  },
  {
    question: 'Is breakfast included?',
    answer:
      'Published listings describe breakfast as available for a fee, along with a snack bar and a shared lounge. A shared kitchen has also been listed for guests who want to cook. Confirm what is open during your stay.',
  },
];

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const hotelId = `${site.url}/#hotel`;

export const hotelJsonLd: Record<string, unknown> = {
  '@type': 'Hotel',
  '@id': hotelId,
  name: site.name,
  description:
    'Budget accommodation in Barangay Logon on Malapascua Island, a short walk from Bounty Beach, with air-conditioned rooms, private bathrooms, and hot showers.',
  url: site.url,
  telephone: site.phones[0].tel,
  image: [`${site.url}/images/hero.jpg`, `${site.url}/images/garden.jpg`, `${site.url}/images/room.jpg`],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  amenityFeature: [
    'Air conditioning',
    'Private bathroom',
    'Hot shower',
    'In-room safe',
    'Garden',
    'Shared lounge',
    'Snack bar',
  ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
  checkinTime: '12:00',
  checkoutTime: '11:00',
  containsPlace: rooms.map((room) => ({
    '@type': 'HotelRoom',
    name: room.name,
    description: room.summary,
    occupancy: { '@type': 'QuantitativeValue', value: Number(room.sleeps.replace(/\D/g, '')) },
    url: `${site.url}/rooms/${room.slug}`,
  })),
};

function graph(...nodes: Record<string, unknown>[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

function webPage(name: string, description: string, path: string): Record<string, unknown> {
  return {
    '@type': 'WebPage',
    '@id': `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': hotelId },
  };
}

const website = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.tagline,
  publisher: { '@id': hotelId },
};

export function roomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

function roomSeo(room: Room): SeoConfig {
  const title = `${room.name} | Malapascua Starlight Resort`;
  const description = `${room.name} at Malapascua Starlight Resort in Barangay Logon. ${room.sleeps}, ${room.beds.toLowerCase()}, ${room.size.toLowerCase()}, with air-conditioning and a private hot shower.`;
  const path = `/rooms/${room.slug}`;
  return {
    title,
    description,
    path,
    image: room.image,
    jsonLd: graph(
      hotelJsonLd,
      website,
      webPage(title, description, path),
      {
        '@type': 'HotelRoom',
        name: room.name,
        description: room.summary,
        url: `${site.url}${path}`,
        containedInPlace: { '@id': hotelId },
        image: `${site.url}/${room.image}`,
      },
    ),
  };
}

export const pageSeo = {
  home: {
    title: 'Malapascua Starlight Resort | Budget stay near Bounty Beach',
    description:
      'Budget accommodation on Malapascua Island, Cebu. Air-conditioned rooms with hot showers in Barangay Logon, a short walk from Bounty Beach, dive shops, and the public market.',
    path: '/',
    image: 'images/hero.jpg',
    jsonLd: graph(hotelJsonLd, website, webPage(
      'Malapascua Starlight Resort',
      'Budget accommodation on Malapascua Island, a short walk from Bounty Beach.',
      '/',
    )),
  } satisfies SeoConfig,
  rooms: {
    title: 'Rooms | Malapascua Starlight Resort, Cebu',
    description:
      'Superior and Super Deluxe rooms at Malapascua Starlight Resort. Air-conditioning, private bathrooms, hot showers, and terraces on the larger units.',
    path: '/rooms',
    image: 'images/room.jpg',
    jsonLd: graph(hotelJsonLd, website, webPage(
      'Rooms at Malapascua Starlight Resort',
      'Superior and Super Deluxe rooms on Malapascua Island.',
      '/rooms',
    )),
  } satisfies SeoConfig,
  island: {
    title: 'Malapascua Island guide | Beaches, diving, and the boat from Maya',
    description:
      'How to reach Malapascua Starlight Resort from Cebu, plus Bounty Beach, Monad Shoal thresher shark dives, the public market, and the lighthouse.',
    path: '/island',
    image: 'images/beach.jpg',
    jsonLd: graph(hotelJsonLd, website, webPage(
      'Malapascua Island guide',
      'Beaches, diving, and the boat from Maya Port to Malapascua.',
      '/island',
    ), {
      '@type': 'TouristDestination',
      name: 'Malapascua Island',
      description: 'A small island off northern Cebu known for Bounty Beach and dawn thresher shark dives.',
      touristType: ['Divers', 'Couples', 'Families', 'Backpackers'],
    }),
  } satisfies SeoConfig,
  gallery: {
    title: 'Photos | Malapascua Starlight Resort',
    description:
      'Garden, room, terrace, and beach scenes for Malapascua Starlight Resort in Barangay Logon, Daanbantayan, Cebu.',
    path: '/gallery',
    image: 'images/garden.jpg',
    jsonLd: graph(hotelJsonLd, website, webPage(
      'Photos of Malapascua Starlight Resort',
      'Garden, room, terrace, and beach scenes.',
      '/gallery',
    )),
  } satisfies SeoConfig,
  guide: {
    title: 'Guest guide and FAQ | Malapascua Starlight Resort',
    description:
      'Check-in, rooms, breakfast, diving, and the boat to Malapascua. Practical answers for a stay at Starlight Resort.',
    path: '/guide',
    image: 'images/lounge.jpg',
    jsonLd: graph(hotelJsonLd, website, webPage(
      'Guest guide',
      'Practical answers for a stay at Malapascua Starlight Resort.',
      '/guide',
    ), {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    }),
  } satisfies SeoConfig,
  contact: {
    title: 'Book a room | Malapascua Starlight Resort',
    description:
      'Call Malapascua Starlight Resort or send a stay inquiry. Barangay Logon, Malapascua Island, Daanbantayan, Cebu 6013.',
    path: '/contact',
    image: 'images/hero.jpg',
    jsonLd: graph(hotelJsonLd, website, webPage(
      'Book Malapascua Starlight Resort',
      'Phone numbers and a stay inquiry for the resort in Barangay Logon.',
      '/contact',
    )),
  } satisfies SeoConfig,
  notFound: {
    title: 'Page not found | Malapascua Starlight Resort',
    description: 'That page is not on the Malapascua Starlight Resort site.',
    path: '/404',
    robots: 'noindex, follow',
  } satisfies SeoConfig,
};

export const roomPages: { room: Room; seo: SeoConfig }[] = rooms.map((room) => ({
  room,
  seo: roomSeo(room),
}));
