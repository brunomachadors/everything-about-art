export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number | null;
  origin: string;
  style: string | null;
  styleArray: string[];
  technique: string | null;
  location: string | null;
  image: string;
  images?: string[];
  tags: string[];
  curiosities: string[];
  pricehistory?: { firstSale: string; resale: string } | null;
  quote?: string | null;
  description: { text: string; image?: string }[];
  createdat: Date;
}
