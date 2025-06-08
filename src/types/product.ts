export type Product = {
  id: number;
  title: string;
  description: string;
  content: string;
  images: string[];
  thumbnail?: string; // 🔹 대표 이미지 (선택 사항)
  price?: number;
  category: string;
  specifications?: {
    [key: string]: string;
  };
};

export const products: Product[] = [
  {
    id: 1,
    title: '지페이 P100 PRO 드론',
    description: '2024년 신제품 50L 대용량 농업용 드론',
    content: `
안녕하세요 오늘도 달리는 전팀장입니다.

지페이 P100 PRO는 2024년에 들어온 50리터 기체입니다.  
전 모델에 비해 날개 크기 및 약제용량, 장애물 회피 능력 등 많은 부분에서 발전된 모습을 보여주네요.

자세한 설명은 동영상과 밑에 제가 다룬 포스팅에서 참고해주시면 감사하겠습니다.

✅ [동영상 보기](https://b01-kr-naver-vod.pstatic.net/blog/a/read/v2/VOD_ALPHA/blog_2024_03_29_2621/base_pathfinder_pf3448100_9c352602-ed1c-11ee-b375-80615f0bcc68.mp4)  
✅ [상세리뷰 포스트 보기](https://blog.naver.com/jsu3001/223422620508)

전국 시연 중입니다.  
많은 연락 부탁드립니다!!
`,
    images: ['/products/1/1.png'],
    thumbnail: '/products/1/1.png', // 🔹 대표 이미지 지정
    category: '농업용 드론',
    specifications: {
      '약제 탱크 용량': '50L',
      '배터리': '고용량 리튬 배터리',
      '비행 시간': '최대 15분',
      '방제 폭': '10-12m',
      '추가 기능': '장애물 회피, 자동 방제',
    },
  },
  {
  id: 2,
  title: 'XAG 지페이드론 P60 30L',
  description: '2025년형 30L 농업용 드론',
  content: `
![사진1](/products/2/1.png)

**농업용드론의 선두주자**  
XAG 지페이 30L급 드론, **P60 모델**입니다.

---

국내에서 인증검사가 되기 전이라  
**비행 영상은 다음 기회에 올리도록 하겠습니다**

---

### 📸 P60 실물 사진

![사진2](/products/2/2.jpg)  
![사진3](/products/2/3.jpg)  
![사진4](/products/2/4.jpg)  
![사진5](/products/2/5.jpg)  
![사진6](/products/2/6.jpg)  
![사진7](/products/2/7.jpg)

---

입제통이 장착돼 있어서 높아보이지만  
**액제통을 장착했을 때는 낮은 모습을 보여줍니다.**

![사진8](/products/2/8.jpg)

---

또한 기존 P60은 **입제통 분리가 어려웠는데요**,  
한국 정식 버전에서는  
**P100PRO처럼 버클식으로 개선**된다는 소식입니다.

🔗 [자세한 블로그 보기](https://blog.naver.com/jsu3001/223646542812)

---

### ✅ 풀 세트 구성품

![사진9](/products/2/9.jpg)

- 본체 1  
- 조종기 1  
- 입제살포기 1  
- 배터리 2  
- 전용 발전기 1  
- 냉각수조 1

---

현재 **P60, P150 예약 판매 중이며 프로모션 행사 진행 중**입니다.  
**전국 서비스 가능**, 자세한 문의는 아래로 연락주세요.

📞 **전팀장 : 010-3487-3490**
`,
  images: [
    '/products/2/1.png',
    '/products/2/2.jpg',
    '/products/2/3.jpg',
    '/products/2/4.jpg',
    '/products/2/5.jpg',
    '/products/2/6.jpg',
    '/products/2/7.jpg',
    '/products/2/8.jpg',
    '/products/2/9.jpg',
  ],
  thumbnail: '/products/2/1.png',
  category: '농업용 드론',
  specifications: {
    '약제 탱크 용량': '30L',
    '배터리': '고용량 리튬 배터리',
    '비행 시간': '약 12-15분',
    '방제 폭': '7-9m',
    '추가 기능': '정밀 방제, 자동 항법',
  },
},
];
