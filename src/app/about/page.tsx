'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
    images: ['/post/2/1.jpg'],
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
    images: ['/post/3/1.jpg'],
    location: '농업회사법인주식회사녹색마을함양지점',
    locationName: '경상남도 함양군 천왕봉로 2437 남호창고'
  }
];

const historyData = [
  {
    year: '2014',
    topItems: ['(주) 녹색마을 설립', '서부경남 방제단 결성', '장애인기업 선정', '벤처기업 인증', '초경량비행장치 사업 승인'],
    bottomItems: ['아티잔 서부경남 총판']
  },
  {
    year: '2016',
    topItems: [],
    bottomItems: ['대구광역시 전체 지역 방제', '전라도 지역 연계 방제']
  },
  {
    year: '2019',
    topItems: ['경남무인항공협동조합 설립 및 녹색마을 연계', '무인헬기, 드론 자체 운용', '드론 자체 수리 공장 설립'],
    bottomItems: []
  },
  {
    year: '2021',
    topItems: [],
    bottomItems: ['제천충 방제(진주·의령)', '남해군 전체 지역 방제', '서부경남 방제']
  },
  {
    year: '2023',
    topItems: ['경남무인항공협동조합 드론 교육원 설립', 'XAG 지페이 서부경남총판 (무무생활공 연계)', '항공 촬영 및 편집'],
    bottomItems: []
  }
];

export default function AboutPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold mb-6">회사소개</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            녹색마을은 농업 드론 전문 기업으로, 혁신적인 기술로 농업의 미래를 선도합니다.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">비전 & 미션</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <h3 className="text-3xl font-semibold mb-6">비전</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                첨단 드론 기술을 활용하여 농업의 생산성과 효율성을 극대화하고,
                지속 가능한 농업 발전을 선도합니다.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <h3 className="text-3xl font-semibold mb-6">미션</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                혁신적인 드론 솔루션으로 농업의 디지털화를 실현하고,
                농업인의 삶의 질 향상에 기여합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Store Posts */}
        <div className="py-16 bg-white">
          <h2 className="text-4xl font-bold mb-12 text-center">지점 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:ring-2 hover:ring-green-500"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-48 relative">
                  <Image src={post.images[0]} alt={post.title} fill className="object-cover" />
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

        {/* Post Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white max-w-4xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedPost.images.map((img, i) => (
                    <div key={i} className="relative w-full h-64 rounded-lg overflow-hidden">
                      <Image src={img} alt={`${selectedPost.title} 이미지 ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-gray-800 whitespace-pre-line text-lg leading-relaxed">
                  {selectedPost.content}
                </div>
                <div className="text-gray-600 mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">📍 {selectedPost.locationName}</p>
                  <p className="text-sm">{selectedPost.location}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* History Section */}
        <div className="mb-24 mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">회사 연혁</h2>
          <div className="relative border-l-4 border-blue-500 pl-10">
            {historyData.map((item, index) => (
              <div key={index} className="mb-16 relative">
                <div className="absolute -left-14 top-0 w-20 text-center">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {item.year}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md ml-6">
                  {[...(item.topItems || []), ...(item.bottomItems || [])].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-900 mb-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-12 rounded-2xl mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">연락처 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">문의처</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-16">전화</span>
                  <span className="text-blue-500">010 3487 3490</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16">이메일</span>
                  <span className="text-blue-500">전상언@naver.com</span>
                </div>
                <div className="flex items-start">
                  <span className="w-16">주소</span>
                  <span className="text-gray-600">
                    경상남도 진주시 나불로21번길 73 <br />
                    or 경상남도 진주시 이현동 1003
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">영업시간</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-16">평일</span>
                  <span className="text-gray-600">09:00 - 18:00</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16">주말</span>
                  <span className="text-gray-600">휴무</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
