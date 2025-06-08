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
  { name: '문의하기', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-green-600 tracking-tight">
          녹색마을
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all ${
                item.name === '문의하기'
                  ? 'bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-6 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-bold text-green-600">
              녹색마을
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center px-4 py-3 rounded-lg text-base font-medium transition ${
                  item.name === '문의하기'
                    ? 'bg-green-600 text-white hover:bg-green-700'
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
