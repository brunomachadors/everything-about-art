import React from 'react';

export const styleColors: Record<string, string> = {
  Romantismo: 'text-pink-400 border-pink-400',
  Modernismo: 'text-green-400 border-green-400',
  Cubismo: 'text-purple-400 border-purple-400',
  Expressionismo: 'text-red-400 border-red-400',
  Surrealismo: 'text-yellow-400 border-yellow-400',
  Barroco: 'text-indigo-400 border-indigo-400',
  Impressionismo: 'text-blue-400 border-blue-400',
  'Pós-Impressionismo': 'text-orange-300 border-orange-300',
  Simbolismo: 'text-fuchsia-400 border-fuchsia-400',
  Renascimento: 'text-orange-400 border-orange-400',
  'Renascimento do Norte': 'text-orange-500 border-orange-500',
  Neoplasticismo: 'text-sky-400 border-sky-400',
  Realismo: 'text-emerald-400 border-emerald-400',
  'Realismo Social': 'text-lime-400 border-lime-400',
  'Realismo Contemporâneo': 'text-lime-300 border-lime-300',
  Abstracionismo: 'text-cyan-400 border-cyan-400',
  Suprematismo: 'text-violet-400 border-violet-400',
  'Arte Contemporânea': 'text-teal-300 border-teal-300',
  'Sátira Política': 'text-red-500 border-red-500',
  Caricatura: 'text-yellow-500 border-yellow-500',
};

export const defaultStyleColor = 'text-white border-white';

interface StyleBadgeProps {
  label: string;
}

const StyleBadge: React.FC<StyleBadgeProps> = ({ label }) => {
  const colorClass = styleColors[label] || defaultStyleColor;

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold border rounded-full ${colorClass}`}
    >
      {label}
    </span>
  );
};

export default StyleBadge;
