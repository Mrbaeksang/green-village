📦 녹색마을 웹사이트 프로젝트
농업용 드론 및 장비를 소개하고 홍보하는 녹색마을 공식 홈페이지입니다.
제품 소개, 회사 지점 안내, 온라인 문의 및 실시간 카카오톡 상담 기능까지 포함되어 있습니다.

📂 프로젝트 구조
bash
복사
편집
green-village/
├── public/                      # 정적 파일들
│   ├── images/                  # 배너, 일반 이미지
│   ├── post/{id}/               # 지점 글별 이미지 폴더
│   └── products/{id}/           # 제품별 이미지 폴더
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 공통 레이아웃 (헤더, 푸터)
│   │   ├── page.tsx             # 홈 페이지
│   │   ├── products/page.tsx    # 제품 소개
│   │   ├── about/page.tsx       # 회사 소개 / 지점 안내
│   │   └── contact/page.tsx     # 문의 폼
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── FloatingButtons.tsx  # 블로그/카카오톡 버튼
│   │
│   ├── types/
│   │   └── product.ts           # 제품 배열 및 타입 정의
│   │
│   └── product_register.py      # 제품 자동 등록 GUI 프로그램 (Python)
│
└── styles/
    └── globals.css              # Tailwind + 기본 스타일
✨ 주요 기능
페이지	설명
🏠 홈	메인 배너, 기능 소개, CTA 버튼, 인기 제품 섹션 포함
📦 제품소개	등록된 제품 목록, 카드형 UI, 개별 상세 설명 포함
🏢 회사소개	지점 리스트, 이미지/주소/설명 및 연혁 타임라인
✉️ 문의하기	이름/이메일/전화번호/내용 폼 전송 (formsubmit 사용)
💬 상담버튼	카카오톡 채널 및 네이버 블로그 버튼 (우측 하단 고정)

🛠️ 데이터 관리 방법
✅ 제품 추가하기
src/types/product.ts 파일에서 products 배열에 다음 형식으로 객체 추가:

ts
복사
편집
{
  id: 3,
  title: "XAG P150 드론",
  description: "2024년 신형 대용량 드론",
  content: `드론 설명 마크다운 가능\n![사진](/products/3/1.png)`,
  images: ["/products/3/1.png", "/products/3/2.jpg"],
  thumbnail: "/products/3/1.png",
  category: "농업용 드론",
  specifications: {
    "탱크 용량": "50L",
    "배터리": "리튬 고출력",
  }
}
📁 /public/products/3/ 에 실제 이미지도 함께 업로드 필요!

✅ 지점 게시물 추가
src/app/about/page.tsx 파일에서 posts 배열에 객체 추가:

ts
복사
편집
{
  id: 4,
  title: "XX지역 드론 대리점 오픈!",
  content: `지점 소개글 자유롭게 작성\n두 번째 줄`,
  images: ["/post/4/1.jpg", "/post/4/2.jpg"],
  location: "경상남도 어디",
  locationName: "OO맨션 옆"
}
📁 /public/post/4/ 폴더를 만들어 이미지 업로드 필수

🧠 Python 등록 프로그램
src/product_register.py 실행 시 GUI로 제품 자동 등록 가능:

제품 제목/요약/카테고리/사양/본문/이미지 폴더 선택

본문에서 1.png, 2.jpg 등 넣으면 자동으로 경로 바뀜

main.png 또는 main.jpg가 있으면 썸네일로 설정됨

버튼 클릭 시 코드 자동 삽입 및 이미지 복사 완료

💡 앞으로 확장 예정
 제품/지점 등록 자동화 완료

 자유게시판 추가 (/community)

 Python GUI에서 게시판 선택 가능하도록 확장 예정

🧑‍💼 프로젝트 설명 요약 (GPT용)
이 프로젝트는 농업용 드론 및 부품을 소개하는 회사 웹사이트로, Next.js (App Router), Tailwind CSS 기반입니다.

제품 소개 및 회사 지점 게시물을 보여주며

문의 폼, 카카오 채팅 버튼, 블로그 링크 등이 존재합니다

사진은 /public/products 및 /public/post로 정리되며,

Python GUI를 통해 쉽게 제품을 등록할 수 있도록 커스터마이징 되어 있습니다

곧 커뮤니티 게시판(/community) 도 추가 예정이며,
Python GUI도 게시판 선택 입력이 가능하도록 확장할 계획입니다.