"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, send this to an error reporting service.
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg-primary px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-text-primary">Something went wrong</h1>
      <p className="max-w-sm text-text-secondary">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={reset}
        className="rounded-btn bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
      >
        Try again
      </button>
    </div>
  );
}
