"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function PageNotFound() {
  return (
    <section className="min-h-[80vh] bg-zinc-50  flex items-center justify-center px-4">
      <div className="text-center max-w-md  rounded-2xl shadow-lg p-8">
        
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-peach/10 text-peach">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Post Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          This article doesn’t exist or was removed.
        </p>

        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-peach px-4 py-2 text-white font-medium hover:bg-peach/90"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </div>
    </section>
  );
}
