'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Drone {
  name: string;
  image: string;
}

const drones: Drone[] = [
  { name: 'P150', image: '/drones/p150.jpg' },
  { name: 'P100PRO', image: '/drones/p100pro.jpg' },
  { name: 'P60', image: '/drones/p60.jpg' },
];

const features = [
  { number: '①', title: 'RTK 기반 초정밀 자동비행' },
  { number: '②', title: '신기술 원심노즐 장착 → 방제효과 + 침투력 상승' },
  { number: '③', title: '수냉식 급속충전 스마트 배터리' },
];

const additionalSections = [
  { title: '드론 교육', link: '/education' },
  { title: '박람회 출품', link: '/exhibition' },
  { title: '드론 정비/공업사', link: '/repair' },
];

export default function XAGSection() {
  const [activeDrone, setActiveDrone] = useState<number>(0);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Drones Section */}
          <div className="space-y-4">
            {drones.map((drone, index) => (
              <div
                key={drone.name}
                className={`
                  relative rounded-lg overflow-hidden cursor-pointer
                  ${activeDrone === index ? 'ring-2 ring-blue-500' : 'hover:opacity-90'}
                `}
                onClick={() => setActiveDrone(index)}
              >
                <Image
                  src={drone.image}
                  alt={drone.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{drone.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-red-600">XAG 공식 인증 총판</h2>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.number} className="flex items-start">
                  <span className="text-red-600 mr-4">{feature.number}</span>
                  <span className="text-xl">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Sections */}
          <div className="space-y-4">
            {additionalSections.map((section) => (
              <a
                key={section.title}
                href={section.link}
                className="
                  p-4 bg-white dark:bg-gray-900 rounded-lg
                  hover:bg-gray-50 dark:hover:bg-gray-800
                  transition-colors duration-200
                
                flex items-center justify-between
              "
              >
                <span>{section.title}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
