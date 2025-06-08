'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: '홈', href: '/' },
  { name: '제품소개', href: '/products' },
  { name: '회사소개', href: '/about' },
  { name: '문의하기', href: '/contact' }, // CTA도 여기서 처리
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8"
        aria-label="Global"
      >
        {/* 로고 */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold text-green-600">
            녹색마을
          </Link>
        </div>

        {/* 햄버거 메뉴 */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition ${
                item.name === '문의하기'
                  ? 'bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              녹색마을
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  item.name === '문의하기'
                    ? 'bg-green-600 text-white text-center hover:bg-green-700'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
