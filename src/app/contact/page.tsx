'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);

    try {
      await fetch('https://formsubmit.co/jsu3001@naver.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      setIsSent(true);
      form.reset();
    } catch (error) {
      alert('문의 전송에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

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

          {/* 문의 폼 */}
          <form
            onSubmit={handleSubmit}
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
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? '전송 중...' : '문의하기'}
            </button>
          </form>
        </div>
      </div>

      {/* 전송 완료 모달 */}
      {isSent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">문의가 접수되었습니다!</h2>
            <p className="text-gray-600 mb-6">빠른 시일 내에 연락드리겠습니다. 감사합니다 😊</p>
            <button
              onClick={() => setIsSent(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
