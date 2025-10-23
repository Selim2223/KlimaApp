export type ActionItem = {
  slug: string;
  title: string;
  text: string;
  image: string;
  link: string;
  width: number;
  height: number;
};

export const actions: ActionItem[] = [
  {
    slug: "planter",
    title: "Spis mer naturlig mat",
    text: "Spis mindre kjøtt, mer grønnsaker, frukt",
    image: "/actions/plants.jpg",
    width: 901,
    height: 768,
    link: "https://www.matprat.no/artikler/matproduksjon/sporsmal-og-svar-om-klima-og-matproduksjon/",
  },
  {
    slug: "miljo",
    title: "Reis miljøvennlig",
    text: "Gå, sykle eller bruk kolektivtransport oftere",
    image: "/actions/sykkel.jpg",
    width: 1280,
    height: 853,
    link: "https://www.sintef.no/fagomrader/ccs_ccus/co2-transport/",
  },
  {
    slug: "matsvinn",
    title: "Reduser matsvin",
    text: "Planlegg måltider og spis restene",
    image: "/actions/avfal.jpg",
    width: 840,
    height: 630,
    link: "https://www.matvett.no/bransje/om-matsvinn",
  },
  {
    slug: "energi",
    title: "Spar energi hjemm",
    text: "Hold hjemmet varmt på en smartere måte",
    image: "/actions/varming.jpg",
    width: 390,
    height: 280,
    link: "https://www.sintef.no/siste-nytt/2021/slik-kan-vi-bruke-klimaverstingen-cosub2sub-til-noe-smart/",
  },
  {
    slug: "led",
    title: "Bruk energiefektive lys",
    text: "LED-lys bruker mindre strøm og varer lenger",
    image: "/actions/led.jpg",
    width: 1703,
    height: 1000,
    link: "https://www.energiogklima.no/data/live-data-strom-og-co2",
  },
  {
    slug: "fiks",
    title: "Ikke kast hvor som helst",
    text: "Fiks eller lever til gjenvinningsstasjon",
    image: "/actions/fiks.jpg",
    width: 448,
    height: 254,
    link: "https://www.miljodirektoratet.no/ansvarsomrader/klima/klimakvoter/avfallsforbrenningsanlegg/",
  },
  {
    slug: "Del",
    title: "Del og lån",
    text: "Lån verktøy og del det du ikke bruker ofte",
    image: "/actions/del.jpg",
    width: 600,
    height: 370,
    link: "https://www.ragnsells.no/tjenester/bedrift/co2-rapport/",
  },
  {
    slug: "transport",
    title: "Velg kolektivtransport i stedet for fly",
    text: "Reis med tog der du kan, og fly sjeldnere",
    image: "/actions/tog.jpg",
    width: 1200,
    height: 800,
    link: "https://www.nrk.no/norge/ny-studie-fra-ntnu-forskere_-klimautslipp-fra-fly-er-mye-hoyere-enn-rapportert-1.16936858",
  },
  {
    slug: "biler",
    title: "Kjør miljøvennlig",
    text: "Øv på økokjøring og bruk elbil om mulig",
    image: "/actions/biler.jpg",
    width: 1280,
    height: 800,
    link: "https://www.vegvesen.no/fag/fokusomrader/klima-miljo-og-omgivelser/utslipp-av-klimagasser/klimagassutslipp-fra-transport/",
  },
  {
    slug: "strom",
    title: "Ren energi",
    text: "Støtt strøm fra sol og vind",
    image: "/actions/strom.jpg",
    width: 1855,
    height: 1038,
    link: "https://aromdekor.no/sv/content/vi-jobbar-for-att-minska-vara-co2-utslapp?gad_source=1&gad_campaignid=9775037233&gbraid=0AAAAACpuxOlVOT9Mz6S_50DGqtZygx37K&gclid=CjwKCAjw0sfHBhB6EiwAQtv5qbh4yv0ZTOuvtEbLx3oT4ohXWsVL1TbLTa6d0la8d8_kCwNAhAszjxoC2ggQAvD_BwE",
  },
];
