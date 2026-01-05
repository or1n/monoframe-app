"use client";
import React from "react";
import Link from "next/link";

export default function CreatorPage() {
  return (
    <main id="content" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-black tracking-widest mb-4">Creator / Maker</h1>
        <p className="text-lg opacity-70">This is a placeholder for the creator/about page.</p>
        <div className="mt-8">
          <Link href="/" className="underline">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
