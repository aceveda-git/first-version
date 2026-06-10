"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TeamMember } from "@/data/team";

const PACK_W = 501;
const PACK_H = 819;
const PACK_FRONT_TOP_H = 194;
const PACK_BACK_TOP_H = 174;
const PACK_BOTTOM_H = 625;
const STICKER_WIDTH = 772;
const STICKER_HEIGHT = 1024;
const REVEAL_MS = 1600;

const FRONT_SEAM = `${((PACK_FRONT_TOP_H / PACK_H) * 100).toFixed(4)}%`;
const BACK_SEAM = `${((PACK_BACK_TOP_H / PACK_H) * 100).toFixed(4)}%`;

type Phase = "idle" | "opening" | "revealed";

type StickerPackRevealProps = {
  member: TeamMember;
};

function PackCompose({ side }: { side: "front" | "back" }) {
  const isFront = side === "front";
  const seam = isFront ? FRONT_SEAM : BACK_SEAM;

  return (
    <div
      className={`reveal__pack-compose reveal__pack-compose--${side}`}
      style={{ "--seam-top": seam } as React.CSSProperties}
    >
      <div
        className={`reveal__layer reveal__layer--bottom${isFront ? " reveal__layer--front-bottom" : ""}`}
      >
        <Image
          src={isFront ? "/pack-front-bottom.png" : "/pack-back-bottom.png"}
          alt=""
          width={PACK_W}
          height={PACK_BOTTOM_H}
          className="reveal__layer-img reveal__layer-img--bottom"
          priority
        />
      </div>

      <div
        className={`reveal__layer reveal__layer--top${isFront ? " reveal__layer--front-top" : ""}`}
      >
        <Image
          src={isFront ? "/pack-front-top.png" : "/pack-back-top.png"}
          alt=""
          width={PACK_W}
          height={isFront ? PACK_FRONT_TOP_H : PACK_BACK_TOP_H}
          className="reveal__layer-img reveal__layer-img--top"
          priority
        />
      </div>
    </div>
  );
}

export function StickerPackReveal({ member }: StickerPackRevealProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [isSpinning, setIsSpinning] = useState(false);
  const canSpinRef = useRef(true);

  const handleOpen = useCallback(() => {
    if (phase !== "idle") return;
    setIsSpinning(false);
    setPhase("opening");
  }, [phase]);

  const handlePointerEnter = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType !== "mouse") return;
      if (phase !== "idle" || !canSpinRef.current) return;
      canSpinRef.current = false;
      setIsSpinning(true);
    },
    [phase],
  );

  const handlePointerLeave = useCallback(() => {
    canSpinRef.current = true;
  }, []);

  const handleSpinEnd = useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.animationName !== "pack-flip-y") return;
      setIsSpinning(false);
    },
    [],
  );

  useEffect(() => {
    if (phase !== "opening") return;
    const timer = window.setTimeout(() => setPhase("revealed"), REVEAL_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  const handleDownload = useCallback(async () => {
    const response = await fetch(member.sticker);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${member.slug}-sticker.png`;
    anchor.click();
    URL.revokeObjectURL(url);
  }, [member]);

  const isInteractive = phase === "idle";
  const cubeClass = [
    "reveal__pack-cube",
    isSpinning ? "reveal__pack-cube--spin" : "",
    phase !== "idle" ? "reveal__pack-cube--locked" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`reveal reveal--${phase}`}>
      <div className="reveal__stage">
        <div className="reveal__pack-rig">
          <div
            className={`reveal__pack-shadow${isSpinning ? " reveal__pack-shadow--hover" : ""}`}
            aria-hidden="true"
          />

          <div className="reveal__sticker-slot">
            <Image
              src={member.sticker}
              alt={`${member.name} sticker`}
              width={STICKER_WIDTH}
              height={STICKER_HEIGHT}
              className="reveal__sticker"
              priority
            />
          </div>

          <div className="reveal__pack-float">
            <button
              type="button"
              className="reveal__pack"
              onClick={handleOpen}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              disabled={!isInteractive}
              aria-label={
                phase === "revealed" ? "Pack opened" : "Open sticker pack"
              }
            >
              <div className="reveal__pack-scene">
                <div className={cubeClass} onAnimationEnd={handleSpinEnd}>
                  <div className="reveal__pack-face reveal__pack-face--front">
                    <PackCompose side="front" />
                  </div>
                  <div className="reveal__pack-face reveal__pack-face--back">
                    <PackCompose side="back" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="reveal__actions">
        <button type="button" className="btn btn--primary" onClick={handleDownload}>
          Download my sticker
        </button>
        <Link href={`/${member.slug}/album`} className="btn btn--ghost">
          View team album
        </Link>
      </div>
    </div>
  );
}
