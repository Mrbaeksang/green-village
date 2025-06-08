// app/community/page.tsx
import { communityPosts } from "@/data/community";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "녹색마을 이야기",
  description: "녹색마을의 다양한 활동과 정보를 전하는 공간입니다.",
};

export default function CommunityPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">녹색마을 이야기</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {communityPosts.map((post) => (
          <div key={post.id} className="p-6 bg-white border border-gray-100 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>

            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                alt={`${post.title} 썸네일`}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <p className="text-gray-700 line-clamp-3 mb-6">{post.content}</p>

            <Link
              href={`/community/${post.id}`}
              className="text-green-600 font-medium hover:underline"
            >
              자세히 보기 →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
