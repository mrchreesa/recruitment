/**
 * Curated Unsplash photography for the demo build.
 * Served straight from the Unsplash CDN so the demo needs no asset pipeline.
 */

const CDN = "https://images.unsplash.com/";

type Crop = { w: number; h?: number };

function src(id: string, { w, h }: Crop) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: "72",
  });
  if (h) params.set("h", String(h));
  return `${CDN}${id}?${params.toString()}`;
}

export const photo = {
  /* People — job seekers */
  seekerA: (c: Crop) => src("photo-1573496359142-b8d87734a5a2", c),
  seekerB: (c: Crop) => src("photo-1527980965255-d3b416303d12", c),
  seekerC: (c: Crop) => src("photo-1573497019236-17f8177b81e8", c),
  seekerD: (c: Crop) => src("photo-1517677129300-07b130802f46", c),
  seekerE: (c: Crop) => src("photo-1508243529287-e21914733111", c),
  seekerF: (c: Crop) => src("photo-1573496527892-904f897eb744", c),
  seekerG: (c: Crop) => src("photo-1589386417686-0d34b5903d23", c),
  seekerH: (c: Crop) => src("photo-1573496799515-eebbb63814f2", c),
  seekerI: (c: Crop) => src("photo-1484863137850-59afcfe05386", c),

  /* Teams & workplaces */
  teamLaptop: (c: Crop) => src("photo-1572021335469-31706a17aaef", c),
  teamGlassTable: (c: Crop) => src("photo-1531545514256-b1400bc00f31", c),
  teamHappy: (c: Crop) => src("photo-1576267423048-15c0040fec78", c),
  teamStanding: (c: Crop) => src("photo-1576267423445-b2e0074d68a4", c),
  teamTable: (c: Crop) => src("photo-1521737852567-6949f3f9f2b5", c),
  deskPair: (c: Crop) => src("photo-1531482615713-2afd69097998", c),

  /* Sectors */
  warehouse: (c: Crop) => src("photo-1664382953403-fc1ac77073a0", c),
  warehouseTeam: (c: Crop) => src("photo-1586528116022-aeda1613c63d", c),
  warehouseBoxes: (c: Crop) => src("photo-1589792923962-537704632910", c),
  hospitality: (c: Crop) => src("photo-1774978608352-17219e0116af", c),
  hospitalityServer: (c: Crop) => src("photo-1758519289582-398f2d7a4a88", c),
  care: (c: Crop) => src("photo-1765896387387-0538bc9f997e", c),
  careScrubs: (c: Crop) => src("photo-1784333250630-e647a26b2240", c),
  construction: (c: Crop) => src("photo-1607128529586-a9617b46b693", c),
  constructionSite: (c: Crop) => src("photo-1641119268504-0d6e26aa81f8", c),
  retail: (c: Crop) => src("photo-1753161617988-c5f43e441621", c),
  retailTill: (c: Crop) => src("photo-1787209516537-a8e66a1b4360", c),
  driver: (c: Crop) => src("photo-1759936802498-2b932ac6e66f", c),
  driverCrates: (c: Crop) => src("photo-1761574319274-8a3a9cd80a6e", c),
  manufacturing: (c: Crop) => src("photo-1598299803204-b73796f43289", c),
  officeAdmin: (c: Crop) => src("photo-1622127739239-1905bbaa21b8", c),

  /* Employers */
  handshake: (c: Crop) => src("photo-1521791136064-7986c2920216", c),
  handshakeSmile: (c: Crop) => src("photo-1549923746-c502d488b3ea", c),
  handshakeLaptop: (c: Crop) => src("photo-1672380135241-c024f7fbfa13", c),
  meetingPair: (c: Crop) => src("photo-1686771416282-3888ddaf249b", c),
  warehouseAisle: (c: Crop) => src("photo-1553413077-190dd305871c", c),
};
