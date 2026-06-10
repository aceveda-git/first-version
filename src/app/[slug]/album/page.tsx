import { notFound } from "next/navigation";
import { TeamAlbum } from "@/components/TeamAlbum";
import { getAllSlugs, getMemberBySlug } from "@/data/team";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function AlbumPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) notFound();

  return (
    <main className="page">
      <TeamAlbum member={member} />
    </main>
  );
}
