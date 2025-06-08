'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">문의하기</h1>
          <p className="text-xl text-gray-600">
            녹색마을에 문의사항을 남겨주세요. 빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-12">전화</span>
                <span>010 3487 3490</span>
              </div>
              <div className="flex items-center">
                <span className="w-12">이메일</span>
                <span>jsu3001@naver.com</span>
              </div>
              <div className="flex items-center">
                <span className="w-12">주소</span>
                <span>경상남도 진주시 나불로21번길 73 or 진주시 이현동 1003</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <form 
            action="https://formsubmit.co/jsu3001@naver.com" 
            method="POST" 
            className="space-y-6"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              문의하기
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
