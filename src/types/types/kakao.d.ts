// types/kakao.d.ts
interface KakaoStatic {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Channel: {
    createChatButton: (options: {
      container: string;
      channelPublicId: string;
    }) => void;
  };
}

interface Window {
  Kakao: KakaoStatic;
}
