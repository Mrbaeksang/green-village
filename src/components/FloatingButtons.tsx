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

      {/* 유튜브 채널 */}
      <a
        href="https://www.youtube.com/channel/UCF28MOhES7kRudY1an2okow"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 hover:bg-red-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M19.615 3.184A3.012 3.012 0 0017.5 2.3C15.967 2.2 12 2.2 12 2.2s-3.967 0-5.5.1a3.012 3.012 0 00-2.115.884C3.4 4.637 3.3 7.37 3.3 7.37s-.1 2.733-.1 5.466.1 5.466.1 5.466.1 2.733 1.085 3.816A3.012 3.012 0 006.5 21.7c1.533.1 5.5.1 5.5.1s3.967 0 5.5-.1a3.012 3.012 0 002.115-.884C20.6 19.363 20.7 16.63 20.7 16.63s.1-2.733.1-5.466-.1-5.466-.1-5.466-.1-2.733-1.085-3.816zM9.8 15.47V8.53l6.4 3.47-6.4 3.47z" />
        </svg>
      </a>
    </div>
  );
}
