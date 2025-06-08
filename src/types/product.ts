export type Product = {
  id: number;
  title: string;
  description: string;
  content: string;
  images: string[];
  thumbnail?: string;
  price?: number;
  category: string;
  specifications?: {
    [key: string]: string;
  };
};
