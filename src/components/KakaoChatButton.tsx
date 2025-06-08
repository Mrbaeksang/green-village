'use client';

import { useEffect } from 'react';

export default function KakaoChatButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.channel.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('여기에_카카오_JavaScript_키'); // 👉 발급받은 키 입력
        window.Kakao.Channel.createChatButton({
          container: '#kakao-talk-channel-chat-button',
          channelPublicId: '_Abcd1234', // 👉 본인 채널 ID 입력
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return <div id="kakao-talk-channel-chat-button" className="fixed bottom-6 right-6 z-50" />;
}
