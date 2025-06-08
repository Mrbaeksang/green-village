import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 고객센터 */}
        <div>
          <h3 className="text-base font-semibold mb-4">고객센터</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center">
              <FaPhone className="text-green-400 mr-2" />
              <span>010-3487-3490</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-400 mr-2" />
              <span>jsu3001@naver.com</span>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-green-400 mt-1 mr-2" />
              <span>경상남도 진주시 나불로21번길 73</span>
            </div>
          </div>
        </div>

        {/* 회사정보 */}
        <div>
          <h3 className="text-base font-semibold mb-4">회사정보</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">회사소개</Link>
            </li>
          </ul>
        </div>

        {/* 고객지원 */}
        <div>
          <h3 className="text-base font-semibold mb-4">고객지원</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">1:1 문의</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-400">
          &copy; {currentYear} 녹색마을. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
