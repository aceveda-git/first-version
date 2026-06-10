import { notFound } from "next/navigation";
import { StickerPackReveal } from "@/components/StickerPackReveal";
import { getAllSlugs, getMemberBySlug } from "@/data/team";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PlayerPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) notFound();

  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow">Effectus World Cup 2026</p>
        <h1 className="page__title">{member.name}</h1>
        <p className="page__subtitle">{member.role}</p>
      </header>

      <StickerPackReveal member={member} />
    </main>
  );
}
