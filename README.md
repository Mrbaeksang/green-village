# 🛠 녹색마을 홈페이지 사용법

이 파일은 홈페이지 내용을 **수정하는 방법**을 설명합니다.  
컴퓨터 잘 몰라도, 이대로만 따라 하면 제품 추가, 사진 변경이 가능합니다!

---

## ✅ 1. 제품을 새로 추가하고 싶을 때

### ✏️ 제품 정보 수정하는 파일

`src/types/product.ts` ← 이 파일을 엽니다.

### 📋 제품 하나 추가하는 양식 예시

```ts
{
  id: 3,  // 숫자만 바꾸면 돼요 (겹치지 않게!)
  title: '내가 올릴 제품 이름',
  description: '짧은 설명 한 줄',
  content: `
**제품 소개글**을 여기에 작성하세요.

- 장점 1
- 장점 2
- 사진 아래에 설명 쓰기도 가능

[블로그 보기](https://naver.com)
  `,
  thumbnail: '/products/3/main.jpg',
  images: [
    '/products/3/main.jpg',
    '/products/3/1.jpg',
    '/products/3/2.jpg'
  ],
  category: '농업용 드론',
  specifications: {
    '약제 탱크 용량': '30L',
    '배터리': '고용량 리튬 배터리',
    '비행 시간': '약 15분',
    '방제 폭': '10-12m',
    '추가 기능': '자동 방제, 장애물 회피'
  }
}
📁 2. 제품 이미지 넣는 방법
public/products/3/ 폴더를 만들고, 아래처럼 사진 넣기

cpp
복사
편집
📂 public
 └── 📂 products
      └── 📂 3
          ├── main.jpg      ✅ 대표 사진 (카드에 보이는)
          ├── 1.jpg         ✅ 상세페이지 안 사진
          ├── 2.jpg
📌 사진 이름은 영어/숫자만! 띄어쓰기 ❌ 한글 ❌

🏢 3. 지점 정보(하동, 산청 등) 추가하려면?
src/app/about/page.tsx 파일을 엽니다.
그 안에서 아래처럼 되어 있는 posts = [...] 부분을 찾아서 추가하세요.

ts
복사
편집
{
  id: 4,
  title: '지점 이름',
  content: `지점 소개 글을 여기에 씁니다`,
  images: [
    '/post/4/1.jpg',
    '/post/4/2.jpg'
  ],
  location: '도로명 주소',
  locationName: '건물 이름 또는 지역명'
}
📁 지점 사진 넣기
public/post/4/ 폴더 만들고 이미지 넣기

cpp
복사
편집
📂 public
 └── 📂 post
      └── 📂 4
          ├── 1.jpg
          └── 2.jpg
📞 문의하기 버튼은 어디로 가나요?
/contact 페이지로 이동합니다.

실시간 상담창은 추후 추가 예정입니다. (카카오톡 상담, 채널톡 등)

