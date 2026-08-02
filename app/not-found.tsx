import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg-primary px-6 text-center">
      <span className="font-display text-7xl font-bold gradient-text">404</span>
      <h1 className="font-display text-2xl font-bold text-text-primary">Page not found</h1>
      <p className="max-w-sm text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="rounded-btn bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </div>
  );
}
