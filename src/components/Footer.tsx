// src/components/Footer.tsx

import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt, FaRegBuilding } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 고객센터 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">고객센터</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-400" />
              <span>055-747-7100</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFax className="text-green-400" />
              <span>055-747-6543</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" />
              <span>jsu3001@naver.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-400 mt-1" />
              <span>
                경상남도 진주시 나불로21번길 73<br />
                (또는 진주시 이현동 1003)
              </span>
            </li>
          </ul>
        </div>

        {/* 회사 정보 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">회사 정보</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <FaRegBuilding className="text-green-400" />
              <span>상호: 주식회사 녹색마을</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-32 text-gray-400">대표자명:</span>
              <span>전경문</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-32 text-gray-400">사업자등록번호:</span>
              <span>613-81-75534</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-32 text-gray-400">법인등록번호:</span>
              <span>191111-0061859</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          &copy; {currentYear} 주식회사 녹색마을. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
