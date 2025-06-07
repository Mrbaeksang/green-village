'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface HistoryItem {
  year: string;
  topItems: string[];
  bottomItems?: string[];
}

const historyData: HistoryItem[] = [
  {
    year: '2014',
    topItems: ['(주) 녹색마을 설립', '서부경남 방제단 결성', '장애인기업 선정', '벤처기업 인증', '초경량비행장치 사업 승인'],
    bottomItems: ['아티잔 서부경남 총판'],
  },
  {
    year: '2016',
    topItems: [],
    bottomItems: ['대구광역시 전체 지역 방제', '전라도 지역 연계 방제'],
  },
  {
    year: '2019',
    topItems: ['경남무인항공협동조합 설립 및 녹색마을 연계', '무인헬기, 드론 자체 운용', '드론 자체 수리 공장 설립'],
    bottomItems: [],
  },
  {
    year: '2021',
    topItems: [],
    bottomItems: ['제천충 방제(진주·의령)', '남해군 전체 지역 방제', '서부경남 방제'],
  },
  {
    year: '2023',
    topItems: ['경남무인항공협동조합 드론 교육원 설립', 'XAG 지페이 서부경남총판 (무무생활공 연계)', '항공 촬영 및 편집'],
    bottomItems: [],
  },
];

export default function HistorySection() {
  const [activeYear, setActiveYear] = useState<number>(0);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">회사 연혁</h2>

        <div className="relative border-l-4 border-blue-500 pl-10">
          {historyData.map((item, index) => (
            <div key={index} className="mb-16 relative">
              {/* 연도 배지 */}
              <div className="absolute -left-14 top-0 w-20 text-center">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {item.year}
                </div>
              </div>

              {/* 내용 카드 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md ml-6">
                {[...(item.topItems || []), ...(item.bottomItems || [])].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-gray-900 dark:text-gray-100 mb-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setActiveYear((prev) => Math.max(0, prev - 1))}
            disabled={activeYear === 0}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveYear((prev) => Math.min(historyData.length - 1, prev + 1))}
            disabled={activeYear === historyData.length - 1}
            className="ml-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
