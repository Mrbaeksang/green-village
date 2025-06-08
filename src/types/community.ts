export interface CommunityPost {
  id: number;
  title: string;
  content: string;
  date: string;
  images?: string[];      // ← ❗ 여기에 ? 붙이기
  thumbnail?: string;     // ← 필요 시 여기도 ? 붙이기
}
