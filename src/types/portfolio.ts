export type PortfolioPageCategory = 'cinematography' | 'color';

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  category: 'narrative' | 'commercial' | 'music-video';
  duration?: string;
  year?: string;
  role?: string;
  camera?: string;
  poster: string;
  portfolioCategory?: PortfolioPageCategory;
  stills?: string[];
  descriptionHeading?: string;
  description?: string;
  brand?: string;
  project?: string;
  client?: string;
  production?: string;
  videoOrientation?: 'portrait' | 'landscape';
}

export type Project = ProjectDetails &
  (
    | { videoSrc: string; embedUrl?: never }
    | { videoSrc?: never; embedUrl: string }
  );
