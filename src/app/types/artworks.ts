export interface Artwork {
  id: string;
  title: string;
  author: string;
  year: number;
  country: string;
  style: string;
  technique: string;
  location: string;
  coverImage: string;
  images?: string[];
  curiosities: string[];
  priceHistory: {
    firstSale: string;
    resale: string;
  };
  quote: string;
  description: { text: string; image?: string }[]; // Alterado para array de objetos
}
