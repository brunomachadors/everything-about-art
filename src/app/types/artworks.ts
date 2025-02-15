export interface Artwork {
  id: string;
  title: string;
  author: string;
  year: number;
  country: string;
  style: string;
  technique: string;
  location: string;
  image: string;
  curiosities: string[];
  priceHistory: {
    firstSale: string;
    resale: string;
  };
  quote: string;
  description: string;
}
