"use client";

import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import { TEAM, type TeamMember } from "@/data/team";

type TeamAlbumProps = {
  member: TeamMember;
};

export function TeamAlbum({ member }: TeamAlbumProps) {
 

  return (
    <div className="album">
      <Link href={`/${member.slug}`} className="album__back">
        ← Back to pack
      </Link>

      <header className="page__header" style={{ marginBottom: "1.5rem" }}>
        <p className="page__eyebrow">Effectus</p>
        <h1 className="page__title">Team Album</h1>
        <p className="page__subtitle">Meet the team</p>
      </header>

      <div className="album__grid">
        {TEAM.map((teammate) => (
          <div
  key={teammate.slug}
  className="album__card"
>
            <Image
  src={teammate.sticker}
  alt={teammate.name}
  width={772}
  height={1024}
  style={{
    width: "100%",
    height: "auto",
  }}
/>
            <span className="album__card-label">{teammate.name}</span>
          </div>
        ))}
      </div>

      
        </div>
      )}
    </div>
  );
}
