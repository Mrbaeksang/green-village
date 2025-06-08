'use client';

export default function KakaoChatButton() {
  return (
    <a
      href="https://pf.kakao.com/_YOUR_CHANNEL_ID/chat" // ← 채널 ID로 바꿔줘
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-5 md:py-3.5 md:px-6 rounded-full shadow-xl flex items-center gap-2 transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M12 0C5.373 0 0 4.514 0 10.082c0 3.18 1.865 5.994 4.76 7.803-.145.602-.942 3.917-1.025 4.29 0 0-.02.17.09.237.108.066.248.014.248.014.327-.046 4.52-2.963 5.13-3.388.59.086 1.198.13 1.797.13 6.627 0 12-4.514 12-10.082S18.627 0 12 0z" />
      </svg>
      실시간 카카오톡 상담
    </a>
  );
}
