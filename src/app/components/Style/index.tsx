import React from 'react';

export const styleColors: Record<string, string> = {
  Romantismo: 'text-pink-400 border-pink-400',
  Modernismo: 'text-green-500 border-green-500',
  Cubismo: 'text-purple-500 border-purple-500',
  Expressionismo: 'text-red-400 border-red-400',
  Surrealismo: 'text-yellow-400 border-yellow-400',
  Barroco: 'text-indigo-500 border-indigo-500',
  Impressionismo: 'text-blue-400 border-blue-400',
  'Pós-Impressionismo': 'text-orange-400 border-orange-400',
  Simbolismo: 'text-fuchsia-500 border-fuchsia-500',
  Renascimento: 'text-amber-400 border-amber-400',
  'Renascimento do Norte': 'text-orange-600 border-orange-600',
  Neoplasticismo: 'text-cyan-400 border-cyan-400',
  Realismo: 'text-emerald-400 border-emerald-400',
  'Realismo Social': 'text-lime-500 border-lime-500',
  'Realismo Contemporâneo': 'text-lime-300 border-lime-300',
  Abstracionismo: 'text-sky-400 border-sky-400',
  Suprematismo: 'text-violet-500 border-violet-500',
  'Arte Contemporânea': 'text-teal-400 border-teal-400',
  'Sátira Política': 'text-rose-500 border-rose-500',
  Caricatura: 'text-yellow-500 border-yellow-500',
  Futurismo: 'text-amber-300 border-amber-300',
  'Idade de Ouro Holandesa': 'text-yellow-200 border-yellow-200',
  Figurativismo: 'text-rose-300 border-rose-300',
  Naturalismo: 'text-green-300 border-green-300',
  'Artes Decorativas': 'text-indigo-300 border-indigo-300',
};

export const defaultStyleColor = 'border-[var(--foreground)]';

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
