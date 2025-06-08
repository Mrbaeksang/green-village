// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavItem = { name: string; href: string; };
const navigation: NavItem[] = [
  { name: '홈', href: '/' },
  { name: '제품소개', href: '/products' },
  { name: '회사소개', href: '/about' },
  { name: '문의하기', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:p-6">
        <Link href="/" className="text-2xl font-extrabold text-green-600">녹색마을</Link>
        <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
        <nav className="hidden lg:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition ${
                item.name === '문의하기'
                  ? 'bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-white p-6 flex flex-col"
          onClick={() => setOpen(false)}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">녹색마을</Link>
            <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="mt-8 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-lg font-semibold p-3 rounded-md ${
                  item.name === '문의하기'
                    ? 'bg-green-600 text-white text-center hover:bg-green-700'
                    : 'text-gray-900 hover:bg-gray-100'
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
