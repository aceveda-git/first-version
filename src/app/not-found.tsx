import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow">Effectus World Cup 2026</p>
        <h1 className="page__title">Page not found</h1>
        <p className="page__subtitle">This player link doesn&apos;t exist.</p>
      </header>
      <Link href="/" className="btn btn--ghost" style={{ maxWidth: "22rem", width: "100%" }}>
        Go home
      </Link>
    </main>
  );
}
