import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold leading-6">고객센터</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <FaPhone className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">010-3487-3490</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">전상언@naver.com</span>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    경상남도 진주시 나불로21번길 73
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6">회사정보</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                    회사소개
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6">고객지원</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                    1:1 문의
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {currentYear} 녹색마을. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
