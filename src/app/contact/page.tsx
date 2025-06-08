'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 상단 안내 */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-green-700">문의하기</h1>
          <p className="text-xl text-gray-600">
            녹색마을에 궁금한 점이 있다면 언제든지 문의해 주세요. 친절하게 안내해드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* 연락처 정보 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-green-700">고객센터 정보</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-4">
                <span className="w-20 font-medium">전화</span>
                <span className="text-gray-900">010-3487-3490</span>
              </li>
              <li className="flex gap-4">
                <span className="w-20 font-medium">이메일</span>
                <span className="text-gray-900">jsu3001@naver.com</span>
              </li>
              <li className="flex gap-4">
                <span className="w-20 font-medium">주소</span>
                <span className="text-gray-900">진주시 나불로21번길 73<br />또는 이현동 1003</span>
              </li>
            </ul>
          </div>

          {/* 문의폼 */}
          <form
            action="https://formsubmit.co/jsu3001@naver.com"
            method="POST"
            className="bg-white rounded-xl p-8 shadow-sm space-y-6 border border-gray-200"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
