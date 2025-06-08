// src/app/community/[id]/page.tsx

import { notFound } from "next/navigation";
import { communityPosts } from "@/data/community";
import ReactMarkdown from "react-markdown";

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = communityPosts.find((p) => String(p.id) === id);
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

export async function generateStaticParams(): Promise<
  { params: { id: string } }[]
> {
  return communityPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));
}
