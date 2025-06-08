'use client';

import { useState } from 'react';
import Image from 'next/image';
import PostModal from './PostModal';

type Post = {
  id: number;
  title: string;
  content: string;
  images: string[];
  location: string;
  locationName: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: '농업용드론 지페이드론 하동 대리점 오픈!!',
    content: `안녕하세요 녹색마을입니다

이번에 좋은 기회가 생겨
하동군 진교면에 지페이드론 대리점 2호점을 오픈했습니다

저희 녹색마을은 하동 뿐만아니라 서부경남의 다양한 곳에 지점을 설립예정이며
최대한 고객님들의 주위에서 
고객님들을 도와드릴수 있는 환경 설립을 최우선으로 생각하고 있습니다

저희 녹색마을은 무성항공과 힘을합쳐
전국적으로 시연을 다니고 있습니다

부담스럽게 생각마시고 편하게 문의 바랍니다`,
    images: [
      '/post/1/SE-f8ab374a-5b0e-4ec7-93f5-2ed6905d450e.jpg',
      '/post/1/2.jpg',
      '/post/1/3.jpg',
      '/post/1/4.jpg',
      '/post/1/5.jpg'
    ],
    location: '경상남도 하동군 민다리안길 97',
    locationName: '진교맨션'
  },
  {
    id: 2,
    title: '자동방제 농업용드론 XAG 지페이드론 산청 대리점 OPEN',
    content: `안녕하세요 녹색마을입니다

이번에 좋은 기회가 생겨
산청군 군청 앞에 지페이드론 대리점 오픈했습니다

저희 녹색마을은 산청뿐만아니라 서부경남의 다양한 곳에 대리점이 있으며
최대한 고객님들의 주위에서 
고객님들을 도와드릴수 있는 환경 설립을 최우선으로 생각하고 있습니다

저희가 주 상품으로 밀고 있는 제품의 가장 큰 특징은
어떠한 기계보다 자동방제의 기능이 특출나다는 점 입니다
이제는 사람이 직접 날려서 방제를 하는 시대는 저물고 있습니다

저희 녹색마을은 무성항공과 힘을합쳐
전국적으로 시연을 다니고 있습니다

교육,촬영,판매,수리,방제
여러 방면으로 사업을 하고 있으니
부담스럽게 생각마시고 편하게 문의 바랍니다`,
    images: [
      '/post/2/1.jpg'
    ],
    location: '녹색마을',
    locationName: '경상남도 산청군 꽃봉산로79번길 33'
  },
  {
    id: 3,
    title: '자동방제 농업용드론 XAG 지페이드론 함양 대리점 OPEN',
    content: `안녕하세요 녹색마을입니다

이번에 좋은 기회가 생겨
함양군에 지페이드론 대리점 오픈했습니다

저희 녹색마을은 함양뿐만아니라 서부경남의 다양한 곳에 대리점이 있으며
최대한 고객님들의 주위에서 
고객님들을 도와드릴수 있는 환경 설립을 최우선으로 생각하고 있습니다

저희가 주 상품으로 밀고 있는 제품의 가장 큰 특징은
어떠한 기계보다 자동방제의 기능이 특출나다는 점 입니다
이제는 사람이 직접 날려서 방제를 하는 시대는 저물고 있습니다

저희 녹색마을은 무성항공과 힘을합쳐
전국적으로 시연을 다니고 있습니다

교육,촬영,판매,수리,방제
여러 방면으로 사업을 하고 있으니
편하게 문의 바랍니다!!`,
    images: [
      '/post/3/1.jpg'
    ],
    location: '농업회사법인주식회사녹색마을함양지점',
    locationName: '경상남도 함양군 천왕봉로 2437 남호창고'
  }
];

export default function StorePosts() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">지점 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:ring-2 hover:ring-green-500"
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-48 relative">
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div className="text-gray-600 mb-4 line-clamp-4">
                  {post.content.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">📍 {post.locationName}</p>
                  <p className="text-sm text-gray-500">{post.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
}
