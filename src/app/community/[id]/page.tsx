// src/app/community/[id]/page.tsx

import { notFound } from "next/navigation";
import { communityPosts } from "@/data/community";
import ReactMarkdown from "react-markdown";

type CommunityDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function CommunityDetailPage({ params }: CommunityDetailPageProps) {
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

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return communityPosts.map((post) => ({
    id: post.id.toString(),
  }));
}
