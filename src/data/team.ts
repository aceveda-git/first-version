export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  sticker: string;
};

function stickerPath(slug: string): string {
  const filename = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("-");
  return `/stickers/${filename}.png`;
}

export const TEAM: TeamMember[] = [
  { slug: "agustin-schneeberger", name: "Agustín Schneeberger", role: "Software developer", sticker: stickerPath("agustin-schneeberger") },
  { slug: "agustina-ceveda", name: "Agustina Ceveda", role: "Marketing designer", sticker: stickerPath("agustina-ceveda") },
  { slug: "agustina-martinez", name: "Agustina Martinez", role: "Fullstack engineer", sticker: stickerPath("agustina-martinez") },
  { slug: "agustina-suarez", name: "Agustina Suárez", role: "Effectus Software", sticker: stickerPath("agustina-suarez") },
  { slug: "alejandro-monetti", name: "Alejandro Monetti", role: "Effectus Software", sticker: stickerPath("alejandro-monetti") },
  { slug: "andres-carvajal", name: "Andrés Carvajal", role: "Frontend engineer", sticker: stickerPath("andres-carvajal") },
  { slug: "ayelen-moretto", name: "Ayelén Moretto", role: "Effectus Software", sticker: stickerPath("ayelen-moretto") },
  { slug: "bruno-pintos", name: "Bruno Pintos", role: "Frontend engineer", sticker: stickerPath("bruno-pintos") },
  { slug: "camila-berreta", name: "Camila Berreta", role: "Frontend engineer", sticker: stickerPath("camila-berreta") },
  { slug: "carola-quintana", name: "Carola Quintana", role: "Frontend engineer", sticker: stickerPath("carola-quintana") },
  { slug: "diego-moreno", name: "Diego Moreno", role: "Effectus Software", sticker: stickerPath("diego-moreno") },
  { slug: "facundo-grela", name: "Facundo Grela", role: "Effectus Software", sticker: stickerPath("facundo-grela") },
  { slug: "federica-gonzalez", name: "Federica Gonzalez", role: "Fullstack engineer", sticker: stickerPath("federica-gonzalez") },
  { slug: "felipe-beltran", name: "Felipe Beltrán", role: "Effectus Software", sticker: stickerPath("felipe-beltran") },
  { slug: "francisco-decurnex", name: "Francisco Decurnex", role: "Effectus Software", sticker: stickerPath("francisco-decurnex") },
  { slug: "ignacio-silveira", name: "Ignacio Silveira", role: "Effectus Software", sticker: stickerPath("ignacio-silveira") },
  { slug: "juan-martin-gallo", name: "Juan Martín Gallo", role: "Effectus Software", sticker: stickerPath("juan-martin-gallo") },
  { slug: "juan-padin", name: "Juan Padín", role: "Effectus Software", sticker: stickerPath("juan-padin") },
  { slug: "juan-pablo-martinez", name: "Juan Pablo Martinez", role: "Effectus Software", sticker: stickerPath("juan-pablo-martinez") },
  { slug: "juan-pablo-mazza", name: "Juan Pablo Mazza", role: "Effectus Software", sticker: stickerPath("juan-pablo-mazza") },
  { slug: "juan-sebastian-aguirre", name: "Juan Sebastián Aguirre", role: "Effectus Software", sticker: stickerPath("juan-sebastian-aguirre") },
  { slug: "lucia-quagliata", name: "Lucia Quagliata", role: "Frontend engineer", sticker: stickerPath("lucia-quagliata") },
  { slug: "luis-felipe-zamora", name: "Luis Felipe Zamora", role: "Effectus Software", sticker: stickerPath("luis-felipe-zamora") },
  { slug: "maria-eugenia-bovina", name: "María Eugenia Bovina", role: "Effectus Software", sticker: stickerPath("maria-eugenia-bovina") },
  { slug: "marian-verenice-noordermer", name: "Marian Verenice Noordermer", role: "Effectus Software", sticker: stickerPath("marian-verenice-noordermer") },
  { slug: "nicolas-estefan", name: "Nicolás Estefan", role: "Effectus Software", sticker: stickerPath("nicolas-estefan") },
  { slug: "nicolas-perez", name: "Nicolás Pérez", role: "Fullstack engineer", sticker: stickerPath("nicolas-perez") },
  { slug: "pablo-duran", name: "Pablo Durán", role: "Effectus Software", sticker: stickerPath("pablo-duran") },
  { slug: "rafaela-canepa", name: "Rafaela Canepa", role: "Fullstack engineer", sticker: stickerPath("rafaela-canepa") },
  { slug: "sebastian-akerman", name: "Sebastian Akerman", role: "Fullstack engineer", sticker: stickerPath("sebastian-akerman") },
  { slug: "vicente-ferreyra", name: "Vicente Ferreyra", role: "Fullstack engineer", sticker: stickerPath("vicente-ferreyra") },
  { slug: "victoria-chaparro", name: "Victoria Chaparro", role: "UX/UI designer", sticker: stickerPath("victoria-chaparro") },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return TEAM.find((member) => member.slug === slug);
}

export function getAllSlugs(): string[] {
  return TEAM.map((member) => member.slug);
}

export function isRouteSlug(slug: string): boolean {
  return getMemberBySlug(slug) !== undefined;
}
