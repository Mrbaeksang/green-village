'use client';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* 네이버 블로그 */}
      <a
        href="https://blog.naver.com/jsu3001"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <span className="text-xl font-bold">N</span>
      </a>

      {/* 카카오톡 상담 */}
      <a
        href="https://pf.kakao.com/_YOUR_CHANNEL_ID/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 hover:bg-yellow-300 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 0C5.373 0 0 4.514 0 10.082c0 3.18 1.865 5.994 4.76 7.803-.145.602-.942 3.917-1.025 4.29 0 0-.02.17.09.237.108.066.248.014.248.014.327-.046 4.52-2.963 5.13-3.388.59.086 1.198.13 1.797.13 6.627 0 12-4.514 12-10.082S18.627 0 12 0z" />
        </svg>
      </a>
    </div>
  );
}
