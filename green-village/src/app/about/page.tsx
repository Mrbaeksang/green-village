import Image from 'next/image';
import HistorySection from '@/components/HistorySection';

export default function AboutPage() {
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

        {/* History Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">회사 연혁</h2>
          <HistorySection />
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
