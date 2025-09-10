export interface Innovation {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  heroImage: string;
  cardImage?: string;
}

export interface InnovationCardData {
  id: string;
  title: string;
  tagline: string;
  imageUrl: string;
  description: string;
  modelUrl?: string;
  modelScale?: number;
}

export interface InnovationSectionData {
  id: string;
  title: string;
  description: string;
  backgroundVideo: string;
  posterImage: string;
  cards: InnovationCardData[];
}