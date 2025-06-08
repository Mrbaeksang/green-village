# 녹색마을 GreenVillage 🛸🌾

**농업용 드론 및 부품 전문 브랜드**인 [녹색마을](https://green-village-ggim.vercel.app/)의 공식 웹사이트 프로젝트입니다.  
Next.js 기반으로 제작되었으며, 고성능 드론 제품 소개, 지점 안내, 온라인 문의 등의 기능을 제공합니다.

---

## 🛠️ 기술 스택

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **React Icons, Heroicons**
- **모바일 반응형 UI 적용**

---

## 🚀 시작하기

### 1. 클론

```bash
git clone https://github.com/your-username/green-village.git
cd green-village
2. 패키지 설치
bash
복사
편집
npm install
3. 로컬 개발 서버 실행
bash
복사
편집
npm run dev
웹사이트는 http://localhost:3000 에서 확인 가능합니다.

📂 디렉토리 구조
bash
복사
편집
src/
├── app/                    # 라우팅 페이지
│   ├── layout.tsx          # 전체 레이아웃 (헤더, 푸터, 메타정보)
│   ├── page.tsx            # 메인 홈페이지
│   ├── products/page.tsx   # 제품 소개 페이지
│   ├── about/page.tsx      # 회사 소개 및 지점 안내
│   └── contact/page.tsx    # 온라인 문의 폼
│
├── components/             # 공통 컴포넌트
│   ├── Header.tsx          # 상단 네비게이션
│   ├── Footer.tsx          # 하단 연락처 정보
│   └── ProductCard.tsx     # 제품 카드 UI
│
├── public/
│   └── images/             # 정적 이미지 (배너, 포스트 등)
│
├── styles/
│   └── globals.css         # Tailwind 및 전역 스타일
│
└── types/
    └── product.ts          # 제품 타입 정의
✨ 주요 기능
홈 페이지
메인 배너, 기능 소개, 인기 제품, CTA 버튼 등 브랜드 소개용 섹션

제품 소개
제품 리스트와 개별 제품 카드, 문의 유도 CTA 포함

회사 소개
지점 안내, 대리점별 포스트, 연혁 타임라인

온라인 문의
이름, 이메일, 문의 내용을 받는 폼 + 연락처 정보 제공

카카오톡 채널 상담 버튼
모든 페이지 하단 고정 배치, 실시간 문의 가능

🧪 테스트
모바일 뷰 확인: 개발자 도구에서 iPhone/Android 화면 확인

이미지 경로 테스트: /public/images/ 또는 /public/post/ 내 정적 파일 사용

🛠️ 커스터마이징
카카오톡 채널 ID는 layout.tsx 하단 kakaoButton 링크에서 수정

제품 리스트는 src/types/product.ts 파일에서 추가/수정 가능

지점 포스트는 about/page.tsx 내 posts 배열에서 관리

🧑‍🌾 사용법: 제품/지점 추가하기
✅ 제품을 추가하려면
src/types/product.ts 파일을 열어.

products 배열 안에 아래처럼 새로운 객체를 하나 추가하면 돼:

ts
복사
편집
{
  id: 4,
  name: "XAG P150 드론",
  description: "강력한 자동 방제 성능의 최신 농업용 드론",
  price: "₩6,500,000",
  image: "/images/products/p150.jpg" // public/images/products 폴더에 이미지 파일도 넣어줘
}
💡 주의: id는 숫자 순서대로 겹치지 않게, image는 실제 이미지 파일명을 public 폴더에 저장해야 정상 출력돼!

🗺️ 지점 포스트를 추가하려면
src/app/about/page.tsx 파일을 열어.

const posts = [...] 배열 안에 아래 예시처럼 새로운 포스트 객체 하나 복붙해서 적어줘:

ts
복사
편집
{
  id: 4,
  title: "XX지역 드론 대리점 오픈!",
  content: `지점 소개글을 줄바꿈 포함해서 자유롭게 작성 가능해요\n두 번째 줄`,
  images: [
    "/post/4/1.jpg",
    "/post/4/2.jpg"
  ],
  location: "경상남도 어디어디 주소",
  locationName: "OO맨션 옆"
}
public/post/4/ 폴더를 만들어서 이미지 파일들을 그 안에 넣어주면 끝!

📝 이미지는 .jpg나 .png로 업로드 가능하고, 폴더명은 포스트 id와 같아야 돼!