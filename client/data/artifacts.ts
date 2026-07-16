export interface ArtifactDecorationLine {
  x: number;
  y: number;
  path: string;
}

export interface ArtifactDecoration {
  viewBox: string;
  color: string;
  strokeWidth: number;
  lines: ArtifactDecorationLine[];
}

export interface Artifact {
  id: string;
  region: string;
  aspect: string;
  artifactImage: string;
  artifactDisplayImage?: string;
  artifactInfoImage?: string;
  artifactInfoImageAspect?: string;
  artifactImageAspect: string;
  artifactTitle: string;
  artifactExhibitedBy: string;
  artifactMaterial: string;
  artifactDescription: string[];
  decoration?: ArtifactDecoration;
}

export const ARTIFACTS: Artifact[] = [
  {
    id: "umpan-gong",
    region: "Asia",
    aspect: "aspect-[233/268]",
    artifactImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F08b90ccb1d2746819f670c478942fd18?format=webp&width=800&height=1200",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F826d7a72bdec43ad936dfebc6ffca697?format=webp&width=800&height=1200",
    artifactImageAspect: "300.258/345.361",
    artifactTitle: "Umpan\nZen Temple Gong",
    artifactExhibitedBy: "Exhibited by Gregg Baker Asian Art",
    artifactMaterial: "Bronze 46.5 x 43.5 cm",
    artifactDescription: [
      "This bronze umpan was struck to mark the temple's daily schedule, its cloud-shaped silhouette believed to carry sound further and call the community to gather.",
      "Cast in a single piece and aged to a soft patina, it reflects the quiet craftsmanship of temple metalworkers whose instruments doubled as devotional objects.",
    ],
  },
  {
    id: "woven-tapestry",
    region: "Oceania",
    aspect: "aspect-[304.49/214.25]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/ffbc7e30db44a60dfc2e2f77ec8829bce420d971?width=609",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F45f2c76af6e447a8bd960cfc03b94aac?format=webp&width=800&height=1200",
    artifactInfoImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e33489363fe28550c7a1145ee1d2fa0af09c90e3?width=714",
    artifactInfoImageAspect: "64/45",
    artifactImageAspect: "304.49/214.25",
    artifactTitle: "Lord of the forest (Tiger)",
    artifactExhibitedBy: "Exhibited by Han Meilin",
    artifactMaterial: "Bronze 91 x 16 x 37 cm",
    artifactDescription: [
      "Inspired by ancient Chinese techniques and historical representations of tigers, the sculpture combines cultural symbolism with a modern, simplified form.",
      "The tiger, often associated with strength, power, and protection in Chinese art and mythology, is reimagined through Meilin's distinctive style, emphasizing bold shapes and expressive features rather than realistic detail. Through this work, Han Meilin bridges traditional Chinese heritage with contemporary artistic expression.",
    ],
  },
  {
    id: "maya-reborn-lord",
    region: "Americas",
    aspect: "aspect-[61/60]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/192bc185abc9e7ba14bfa4ae6957e5a4cec8bfa6?width=665",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2Ff853471d4e7d4aee80e880580412c800?format=webp&width=800&height=1200",
    artifactImageAspect: "333/327",
    artifactTitle: 'Maya "Reborn Lord" figure',
    artifactExhibitedBy: "Exhibited by Arqueología Maya",
    artifactMaterial: "Jadeite 14 x 11.5 x 9 cm",
    artifactDescription: [
      'Dating to the Classic Period (ca. 250–900 AD), this remarkable Maya "Reborn Lord" figure is a testament to the sophisticated craftsmanship and deep cosmological beliefs of ancient Mesoamerica. Masterfully carved by an unknown artisan, the portable effigy is sculpted from a solid block of jadeite, a highly prized, sacred greenstone that symbolized breath, life, and the vital qualities of water to the Maya elite. The piece portrays a human face adorned with distinct earspools emerging from a textured turtle carapace. In Maya mythology, the turtle represents the earth and serves as a crucial locus for cosmic creation and rebirth, famously mirroring the mythic emergence of the Maize God from a split turtle shell. Measuring approximately 5.5 x 4.5 x 3.5 inches (14.0 x 11.5 x 9.0 cm), this expertly polished greenstone artifact captures a profound moment of spiritual transformation, bridging the earthly realm with the cyclical nature of life and resurrection.',
    ],
  },
  {
    id: "turkic-horse",
    region: "Asia",
    aspect: "aspect-[91/83]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/df06c2ff5cbdf2e92dc61875e83fd32018ccfc98?width=665",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F0243eca1a65641b8aef9a371f520970d?format=webp&width=800&height=1200",
    artifactImageAspect: "315/291",
    artifactTitle: "Turkic Steppe Custom:\nThe Knotted Tail",
    artifactExhibitedBy: "Exhibited by [unknown]",
    artifactMaterial: "Bronze 60 x 30 cm",
    artifactDescription: [
      "The sculpture symbolizes an ancient Central Asian steppe warrior custom of the Turkic and Hunnic peoples. The knotted horse tail signifies a profound vow of commitment, usually indicating preparation for serious conflict or war. It captures the martial spirit of nomadic cavalry dedicated to facing their fate.",
      "This piece also represents the core cultural identity and equestrian heritage of the nomads. The horse was viewed as a partner and a religious symbol, not just transport. Depicting the horse in this powerful style underscores the tribe's strength and their life intrinsically linked to their mounts.",
    ],
  },
  {
    id: "mayan-jade-hacha",
    region: "Americas",
    aspect: "aspect-[272/315]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/7586073eaf786e67ff1b82fb4731e7aec910767f?width=544",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2Fd46f846995c44acbb4288a443afae863?format=webp&width=800&height=1200",
    artifactImageAspect: "272/315",
    artifactTitle: "Mayan Carved Jade Ceremonial Hacha",
    artifactExhibitedBy: "Exhibited by [unknown]",
    artifactMaterial: "Jade 9.5 x 7.5 cm",
    artifactDescription: [
      'Dating primarily to the Maya Classic Period (circa 300–900 CE), the carved jade ceremonial hacha represents the pinnacle of ancient Mesoamerican artistry and elite ritual culture. Though the Spanish word translates to "axe," these highly polished, crescent-shaped objects were not functional tools, but rather sacred paraphernalia associated with the high-stakes Mesoamerican ballgame. Carved from precious jadeite—a stone the Maya valued above gold for its association with breath, water, and agricultural fertility—these artifacts were often fashioned into the profiles of deities, ancestral rulers, or sacred animals like jaguars and birds.',
      "Elite players or rulers wore lightweight wood or leather versions during the game, while these heavy, intricately carved jade and stone counterparts were displayed during pre-game ceremonies or buried as lavish dedicatory offerings to the gods.",
    ],
  },
  {
    id: "quadrangular-censer",
    region: "Americas",
    aspect: "aspect-[173/115]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/35e84c892001f8e44018957e84624fcddb3f3475?width=692",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F3893de5797c34ff4bb2fecdcac7edf25?format=webp&width=800&height=1200",
    artifactImageAspect: "173/115",
    artifactTitle: "Quadrangular Censer Element with the Feathered Serpent",
    artifactExhibitedBy: "Exhibited by [unknown]",
    artifactMaterial: "Orange terracotta 17 x 25 cm",
    artifactDescription: [
      "This striking artifact represents a profound moment of cross-cultural exchange in Classic Period Mesoamerica, serving as a material bridge between two distinct ancient civilizations. Crafted from orange terracotta (earthenware) and retaining subtle traces of its original beige pigment, this quadrangular tile or plaque was once part of an elaborate Zapotec ritual censer or larger architectural sculpture. While its stylistic origin stems from the Zapotec culture of the Oaxaca region (dating to roughly 400–700 CE), its subject matter tells a story of foreign influence. The relief depicts a manifestation of the Feathered Serpent, a pan-Mesoamerican deity known as Quetzalcóatl to the later Aztecs or Kukulkan to the Maya. This god was not native to the Zapotec pantheon; rather, it was introduced to the region by traveling merchants, diplomats, and elite artisans originating from the massive, cosmopolitan metropolis of Teotihuacan in the Valley of Mexico. Measuring a compact 17 x 25 cm, the piece demonstrates how deeply embedded interregional trade networks influenced local religious practices, embedding high-status foreign iconography directly into the sacred, fire-driven ceremonies of Zapotec elites.",
      "Elite players or rulers wore lightweight wood or leather versions during the game, while these heavy, intricately carved jade and stone counterparts were displayed during pre-game ceremonies or buried as lavish dedicatory offerings to the gods.",
    ],
  },
  {
    id: "plumed-serpent-finial",
    region: "Americas",
    aspect: "aspect-[171/113]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/a8ac9839b49bbee5d5169e8a8fb7bc01636c0d95?width=684",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F6d1962ac482943dc9effdc659122373d?format=webp&width=800&height=1200",
    artifactImageAspect: "171/113",
    artifactTitle: "Plumed Serpent Finial",
    artifactExhibitedBy: "Exhibited by The MFAH Collections",
    artifactMaterial: "Earthenware 12.1 x 24.4 x 6.7 cm",
    artifactDescription: [
      "The Plumed Serpent Finial is a masterful Maya artifact dating to the Late Classic Period (A.D. 600–900), currently housed in the Museum of Fine Arts, Houston. Crafted from earthenware with traces of pigment, this architectural or ceremonial topper vividly depicts the open-fanged jaws of a feathered serpent—a powerful Mesoamerican deity symbolizing the intersection of earth and sky. The sculpture reflects the exceptional skill of Maya artisans, capturing stylized, swirling plumes and fierce reptilian features that convey divine authority. Used to crown a staff, banner, or structure, the finial served as a potent symbol of leadership, spiritual connection, and cosmic balance in ancient Mesoamerican society.",
    ],
  },
  {
    id: "archaic-bronze-vessel",
    region: "Asia",
    aspect: "aspect-[125/167]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/cf1104175481ba28abf5c216aa4ed24901e02109?width=506",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F80ad7cf583c348bb97c8be41de7b003c?format=webp&width=800&height=1200",
    artifactImageAspect: "125/167",
    artifactTitle: "Archaic Bronze Ritual Food Vessel",
    artifactExhibitedBy: "Exhibited by [unknown]",
    artifactMaterial: "Bronze 22 x 19.5 cm",
    artifactDescription: [
      "This exceptional ding from the Anyang phase of the late Shang Dynasty represents the pinnacle of ancient Chinese metallurgical sophistication and aristocratic ritual culture. Cast using intricate piece-mold technology, the tripod cauldron features a swelling, deep-bellied bowl adorned with a dramatic frieze of taotie masks, complete with bulging eyes and prominent horns raised against a background of delicate spiral leiwen patterns. Designed with dual upright handles on the rim, it served both the practical function of being suspended over fires and the spiritual function of holding sacrificial food offerings to divine ancestors. The surface is covered in a highly desirable, naturally aged malachite green and cuprite patina, typical of elite ritual wares preserved through antiquity.",
    ],
  },
  {
    id: "iatmul-hook-figure",
    region: "Oceania",
    aspect: "aspect-[59/100]",
    artifactImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/34613e627050db91ed7a90e3d00188d04252eef0?width=498",
    artifactDisplayImage:
      "https://cdn.builder.io/api/v1/image/assets%2F59ae6c8159ad4fdba2e0719b36d3bd73%2F5ad007ede74140a4a90fa7cb7e4079df?format=webp&width=800&height=1200",
    artifactImageAspect: "59/100",
    artifactTitle: "Iatmul Suspension Hook Figure",
    artifactExhibitedBy: "Exhibited by [unknown]",
    artifactMaterial: "Hardwood 90 x 20 x 15 cm",
    artifactDescription: [
      "This monumental Iatmul Ancestor Figure originates from the politically autonomous, marshy riverine villages lining the Middle Sepik River region of Papua New Guinea. Standing as a vital bridge between the living community and the supernatural realm, these carvings are not generic decorations but embody specific, localized primal deities or foundational clan ancestors. They were traditionally housed within the shadowed upper stories of the Haus Tambaran (the highly restrictive, sacred men's ceremonial house), which served as the political and spiritual epicenter of Iatmul society. Every structural line of the sculpture carries profound ideological weight; the elaborate curvilinear patterns carved across the chest and shoulders meticulously replicate the painful crocodile scarification marks received by young Iatmul men during their complex, grueling adulthood initiation ceremonies. According to creation cosmology, the universe itself emerged from a primal sea when a giant crocodile formed the dry land with its back-making the stylized reptilian scales and elongated features on these figures an affirmation of their ancestral creation story.",
    ],
  },
];

export function getArtifactById(id: string) {
  return ARTIFACTS.find((artifact) => artifact.id === id);
}

export function getNextArtifact(id: string) {
  const index = ARTIFACTS.findIndex((artifact) => artifact.id === id);
  if (index === -1) return ARTIFACTS[0];
  return ARTIFACTS[(index + 1) % ARTIFACTS.length];
}
