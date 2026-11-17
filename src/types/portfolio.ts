export type ProjectCategory =
  | 'all'
  | 'narrative'
  | 'commercial'
  | 'music-video';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'narrative' | 'commercial' | 'music-video';
  duration: string;
  year?: string;
  role?: string;
  camera?: string;
  poster: string;
  videoSrc: string;
  stills?: string[];
  description?: string;
}

export interface FeaturedReelItem {
  tag: string;
  title: string;
  badge: string;
  poster: string;
  videoSrc: string;
}

export interface ModalReelItem {
  title: string;
  subtitle?: string;
  duration: string;
  poster: string;
  videoSrc: string;
}
