'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
// Heroicons are great for icons, but since we're aiming for a very clean look,
// and the current design doesn't explicitly use them, we can remove if not needed for future features.
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Post 타입을 정의합니다. 각 지점 소식의 데이터 구조를 나타냅니다.
type Post = {
  id: number;
  title: string;
  content: string;
  images: string[];
  location: string;
  locationName: string;
};

// 지점 소식 데이터를 배열로 정의합니다.
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

// 회사 연혁 데이터를 배열로 정의합니다.
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
  // 모달에 표시될 선택된 게시물 상태를 관리합니다.
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // 이스케이프 키를 눌러 모달을 닫는 기능을 추가합니다.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    // 컴포넌트 언마운트 시 이벤트 리스너를 제거하여 메모리 누수를 방지합니다.
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때 한 번만 실행됨을 의미합니다.

  return (
    // 전체 페이지 컨테이너: 최소 높이를 화면 전체로 설정하고, 배경색을 부드러운 회색으로 변경합니다.
    <div className="min-h-screen bg-gray-50 py-20">
      {/* 최대 너비와 가운데 정렬을 위한 컨테이너. 패딩을 추가하여 내용이 가장자리에 붙지 않도록 합니다. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section (회사 소개 제목 및 설명) */}
        <header className="text-center mb-24">
          {/* 메인 제목: 더 크고, 굵고, 추적 간격을 조정하여 가독성을 높입니다. */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">회사소개</h1>
          {/* 서브 텍스트: 회색 톤으로 부드러움을 더하고, 최대 너비를 제한하여 읽기 쉽게 합니다. */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            녹색마을은 농업 드론 전문 기업으로, 혁신적인 기술로 농업의 미래를 선도합니다.
          </p>
        </header>

        {/* Store Posts (지점 안내) 섹션 */}
        <section className="py-16"> {/* 상하 패딩 유지 */}
          {/* 지점 안내 제목: 더 크고 굵게, 중앙 정렬합니다. */}
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">지점 안내</h2>
          {/* 지점 카드 그리드: 반응형으로 1, 2, 3열로 변경되며, 간격을 넓혀 시각적 여백을 줍니다. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              // 각 게시물 카드: 배경을 흰색으로, 모서리를 둥글게, 그림자를 추가합니다.
              // 호버 시 그림자와 테두리 효과를 주어 클릭 가능함을 명확히 합니다.
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-transparent hover:border-green-500"
                onClick={() => setSelectedPost(post)} // 클릭 시 모달 열기
              >
                {/* 이미지 컨테이너: 고정된 높이와 이미지 채우기 속성을 사용합니다. */}
                <div className="h-56 relative w-full"> {/* 이미지 높이를 조금 더 늘려 시원한 느낌 */}
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill // 부모 컨테이너를 채우도록 설정
                    className="object-cover" // 이미지 비율 유지하며 컨테이너에 맞게 자르기
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 반응형 이미지 사이즈 최적화
                  />
                </div>
                {/* 텍스트 내용 부분 */}
                <div className="p-6">
                  {/* 제목: 더 굵고 깔끔하게. */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  {/* 내용: 회색 톤으로, 최대 4줄까지 보여주고 넘치면 ... 처리합니다. */}
                  <div className="text-gray-700 text-base mb-4 line-clamp-4 leading-relaxed">
                    {/* 줄바꿈을 <p> 태그로 처리하여 HTML에서 정확하게 표시되도록 합니다. */}
                    {post.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-1">{line}</p>
                    ))}
                  </div>
                  {/* 위치 정보: 작은 글씨와 연한 회색 톤으로 보조 정보임을 나타냅니다. */}
                  <div className="mt-5 text-sm text-gray-500">
                    <p className="font-medium">📍 {post.locationName}</p>
                    <p>{post.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Post Modal (게시물 상세 모달) */}
        {selectedPost && ( // selectedPost가 있을 때만 모달을 렌더링합니다.
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" // 배경을 더 어둡고 약간 블러 처리
            onClick={() => setSelectedPost(null)} // 모달 외부 클릭 시 닫기
          >
            {/* 모달 내부 컨테이너: 흰색 배경, 둥근 모서리, 큰 그림자, 최대 너비 및 높이 제한 */}
            <div
              className="bg-white max-w-5xl w-full p-8 rounded-xl shadow-2xl overflow-y-auto max-h-[95vh] relative" // 패딩을 더 주고, 그림자를 강화
              onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 모달이 닫히지 않도록 이벤트 전파 중지
            >
              {/* 닫기 버튼 (X 아이콘) - 모달 우측 상단에 배치 */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                onClick={() => setSelectedPost(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 모달 제목 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pr-10">{selectedPost.title}</h2>
              <div className="space-y-8"> {/* 섹션 간 간격 증가 */}
                {/* 이미지 갤러리 그리드 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* 그리드 간격과 컬럼 조정 */}
                  {selectedPost.images.map((img, i) => (
                    <div key={i} className="relative w-full h-56 rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src={img}
                        alt={`${selectedPost.title} 이미지 ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
                {/* 게시물 내용 */}
                <div className="text-gray-800 whitespace-pre-line text-lg leading-relaxed bg-gray-50 p-6 rounded-lg"> {/* 배경색과 패딩 추가 */}
                  {selectedPost.content}
                </div>
                {/* 위치 정보 박스 */}
                <div className="text-gray-600 p-5 bg-blue-50 rounded-lg border border-blue-100"> {/* 색상 변경 및 테두리 추가 */}
                  <p className="font-semibold text-blue-700 mb-1">📍 {selectedPost.locationName}</p>
                  <p className="text-base text-blue-600">{selectedPost.location}</p>
                </div>
              </div>
              {/* 모달 닫기 버튼 */}
              <div className="mt-8 flex justify-center"> {/* 버튼을 가운데로 정렬 */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-10 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors text-lg" // 버튼 크기 및 폰트 변경
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* History Section (회사 연혁) */}
        <section className="mb-24 mt-24"> {/* 상하 마진 유지 */}
          {/* 회사 연혁 제목 */}
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">회사 연혁</h2>
          {/* 연혁 타임라인 컨테이너 */}
          <div className="relative border-l-4 border-green-500 pl-10"> {/* 연혁 라인 색상을 초록색으로 변경 */}
            {historyData.map((item, index) => (
              <div key={index} className="mb-16 relative">
                {/* 연도 표시: 타임라인 왼쪽에 위치하며, 배경색과 폰트 스타일을 조정합니다. */}
                <div className="absolute -left-16 top-0 w-24 text-center"> {/* 왼쪽 마진과 너비 조정 */}
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-base font-bold shadow-md transform -translate-x-1/2"> {/* 배경색 변경, 폰트 및 위치 조정 */}
                    {item.year}
                  </div>
                </div>
                {/* 연혁 내용 박스: 흰색 배경, 둥근 모서리, 그림자, 패딩을 적용합니다. */}
                <div className="bg-white rounded-xl p-7 shadow-lg ml-6 border border-gray-100"> {/* 배경색 흰색, 패딩 및 그림자 강화, 테두리 추가 */}
                  {/* 연혁 항목 리스트 */}
                  {[...(item.topItems || []), ...(item.bottomItems || [])].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-800 mb-2"> {/* 간격 조정, 텍스트 색상 변경 */}
                      <span className="text-green-600 text-lg mt-1">•</span> {/* 불릿 색상을 초록색으로 변경 */}
                      <span className="leading-relaxed text-base">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info (연락처 정보) 섹션 */}
        <section className="bg-gray-100 p-12 rounded-2xl mt-20 shadow-inner"> {/* 배경색을 약간 더 진한 회색으로, 그림자 추가 */}
          {/* 연락처 정보 제목 */}
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">연락처 정보</h2>
          {/* 연락처 및 영업시간 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* 간격 증가 */}
            {/* 문의처 카드 */}
            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100"> {/* 패딩, 배경, 그림자 강화, 테두리 추가 */}
              <h3 className="text-2xl font-bold text-gray-900 mb-5">문의처</h3>
              <div className="space-y-4 text-lg"> {/* 텍스트 크기 증가 */}
                <div className="flex items-center">
                  <span className="min-w-[80px] font-medium text-gray-700">전화</span> {/* 너비 조정 */}
                  <span className="text-blue-600 font-semibold">010 3487 3490</span> {/* 색상 및 굵기 조정 */}
                </div>
                <div className="flex items-center">
                  <span className="min-w-[80px] font-medium text-gray-700">이메일</span>
                  <span className="text-blue-600 font-semibold">jsu3001@naver.com</span>
                </div>
                <div className="flex items-start">
                  <span className="min-w-[80px] font-medium text-gray-700 mt-1">주소</span>
                  <span className="text-gray-700 leading-relaxed">
                    경상남도 진주시 나불로21번길 73 <br />
                    (이현동 1003)
                  </span>
                </div>
              </div>
            </div>
            {/* 영업시간 카드 */}
            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100"> {/* 패딩, 배경, 그림자 강화, 테두리 추가 */}
              <h3 className="text-2xl font-bold text-gray-900 mb-5">영업시간</h3>
              <div className="space-y-4 text-lg"> {/* 텍스트 크기 증가 */}
                <div className="flex items-center">
                  <span className="min-w-[80px] font-medium text-gray-700">평일</span>
                  <span className="text-gray-700 font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex items-center">
                  <span className="min-w-[80px] font-medium text-gray-700">주말</span>
                  <span className="text-gray-700 font-semibold">휴무</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}