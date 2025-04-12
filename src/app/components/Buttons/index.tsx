'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  fallbackPath: string;
}

export default function BackButton({ fallbackPath }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackPath);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
    >
      Voltar
    </button>
  );
}
