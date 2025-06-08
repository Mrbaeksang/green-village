import Image from 'next/image';
import { useEffect } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  images: string[];
  location: string;
  locationName: string;
};

type PostModalProps = {
  post: Post | null;
  onClose: () => void;
};

export default function PostModal({ post, onClose }: PostModalProps) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-4xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.images.map((img, i) => (
              <div key={i} className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image 
                  src={img} 
                  alt={`${post.title} 이미지 ${i + 1}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          <div className="text-gray-800 whitespace-pre-line text-lg leading-relaxed">
            {post.content}
          </div>
          <div className="text-gray-600 mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">📍 {post.locationName}</p>
            <p className="text-sm">{post.location}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
