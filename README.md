# Malapascua Starlight Resort

Marketing site for [Malapascua Starlight Resort](https://www.malapascuastarlightresort.com/) in Barangay Logon, Daanbantayan, Cebu. The public pages are an Angular app. Node.js serves them with server rendering and stores booking inquiries.

The live Wix site was the source for the resort name, phone numbers, address, and room features. Room sizes and bed layouts follow the types listed on public booking pages. Nightly rates are not published here. The resort confirms the price.

Photographs in `public/images` are original scenes made for this project. Replace them with real resort photos before you promote the site.

## Pages

- `/` home
- `/rooms` and one page per room type
- `/island` beaches, thresher shark diving, and the trip from Cebu
- `/gallery`
- `/guide` FAQ, including FAQ structured data
- `/contact` inquiry form

## SEO included

- Server-rendered HTML, with routes prerendered at build time
- Unique title, description, canonical URL, and Open Graph tags on each page
- Hotel and FAQ JSON-LD
- `public/robots.txt` and `public/sitemap.xml`
- One H1 per page, descriptive image alt text, and a crawlable nav
- The live Pages site is https://sheigr.github.io/malapascua-starlight/
- Canonical tags, the sitemap, and Open Graph URLs use that address

Change the address in `src/app/data/site.data.ts`, `src/index.html`, `public/robots.txt`, and `public/sitemap.xml` when you attach `www.malapascuastarlightresort.com`. A push to `main` publishes the static pages. GitHub Pages cannot run the Node inquiry API, so the form on the public site asks people to call. Run `npm run start:ssr` where you need saved inquiries.

## Run it

```bash
npm start
```

Opens the Angular dev server. Page rendering works. The inquiry API does not, because that route lives on the Node server.

```bash
npm run build
npm run start:ssr
```

Serves the built site and the API at `http://localhost:4000`.

`POST /api/inquiries` checks the form and appends the request to `data/inquiries.json` in the folder where you start the server. `GET /api/health` returns `{ "ok": true }`. Nothing in the API charges a card or sends email. To deliver inquiries to an inbox, add mail later and keep the same JSON file as the backup.

Set `PORT` to change the listen port. Set `INQUIRY_STORE` to move the JSON file.

## Before you advertise it

1. Swap in real photos of the rooms, gate, and beach.
2. Confirm the two phone numbers, check-in at noon, and check-out at 11:00.
3. Deploy the Node server on HTTPS and submit `sitemap.xml` in Google Search Console.
4. Keep the same name, address, and phone on the site, on Google Business Profile, and on the booking sites.
