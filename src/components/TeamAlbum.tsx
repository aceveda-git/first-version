"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { TEAM, type TeamMember } from "@/data/team";

type TeamAlbumProps = {
  member: TeamMember;
};

export function TeamAlbum({ member }: TeamAlbumProps) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, close]);

  return (
    <div className="album">
      <Link href={`/${member.slug}`} className="album__back">
        ← Back to pack
      </Link>

      <header className="page__header" style={{ marginBottom: "1.5rem" }}>
        <p className="page__eyebrow">Effectus</p>
        <h1 className="page__title">Team Album</h1>
        <p className="page__subtitle">Tap a sticker to enlarge</p>
      </header>

      <div className="album__grid">
        {TEAM.map((teammate) => (
          <button
            key={teammate.slug}
            type="button"
            className="album__card"
            onClick={() => setSelected(teammate)}
            aria-label={`View ${teammate.name} sticker`}
          >
            <Image
  src={sticker}
  alt=""
  width={400}
  height={600}
  style={{
    objectFit: "contain",
    width: "auto",
    height: "auto",
    maxWidth: "90vw",
    maxHeight: "90vh",
  }}
/>
            <span className="album__card-label">{teammate.name}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} sticker`}
          onClick={close}
        >
          <div
            className="lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox__close"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>
            <Image
              src={selected.sticker}
              alt={selected.name}
              width={772}
              height={1024}
              className="lightbox__img"
            />
            <p className="lightbox__name">{selected.name}</p>
            <p className="lightbox__role">{selected.role}</p>
          </div>
        </div>
      )}
    </div>
  );
}
