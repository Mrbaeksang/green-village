'use client';

import Link from 'next/link';
import { useState } from 'react';

interface MenuItem {
  label: string;
  link?: string;
  children?: MenuItem[];
}

interface CategoryTreeMenuProps {
  data: MenuItem[];
}

export default function CategoryTreeMenu({ data }: CategoryTreeMenuProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isExpanded = expanded.includes(item.label);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.label} className="flex items-center">
        {/* Toggle Icon */}
        {hasChildren && (
          <button
            onClick={() => toggleExpand(item.label)}
            className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            <svg
              className={`w-4 h-4 transform ${isExpanded ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Menu Item */}
        <div className="flex-1">
          {item.link ? (
            <Link
              href={item.link}
              className={`
                flex items-center px-4 py-2
                ${level === 0 ? 'text-xl font-bold' : 'text-lg'}
                ${item.link ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : ''}
              `}
            >
              {item.label}
            </Link>
          ) : (
            <div className={`px-4 py-2 ${level === 0 ? 'text-xl font-bold' : 'text-lg'}`}>
              {item.label}
            </div>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="p-4">
        {data.map((item) => renderMenuItem(item))}
      </div>
    </nav>
  );
}
