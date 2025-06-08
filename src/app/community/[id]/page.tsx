// src/app/community/[id]/page.tsx
'use client';

import { notFound } from "next/navigation";
import { communityPosts } from "@/data/community";
import ReactMarkdown from "react-markdown";

export default function CommunityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = communityPosts.find((p) => String(p.id) === params.id);
  if (!post) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div className="prose prose-green max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </main>
  );
}

// 반드시 params 래퍼를 포함해서 리턴해야 함
export async function generateStaticParams(): Promise<Array<{ params: { id: string } }>> {
  return communityPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));
}
