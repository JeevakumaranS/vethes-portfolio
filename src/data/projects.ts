import { Project, FeaturedReelItem, ModalReelItem } from "@/types/portfolio";
import workezThumbnail from "@/assets/thumbnails/workez.jpg.jpeg";
import rifleThumbnail from "@/assets/thumbnails/Rifle pic.jpg.jpeg";
import pothysThumbnail from "@/assets/thumbnails/Pothys pic.jpg.jpeg";
import papaJohnsThumbnail from "@/assets/thumbnails/papa john pic00090153.jpg.jpeg";

export const FEATURED_REEL: FeaturedReelItem = {
  tag: "DIRECTOR REEL",
  title: "SELECTED WORKS • VOL. IV",
  badge: "PREVIEW",
  poster:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOycibJkLmvryhAEW8ij65M1eXbsCX1e-iwJWNB4OxkAl73psh5EnlXalOTNiMjgJyHnS1y0bkVfF6t80I71OW_7yJiixT0MO6gvowFydRX76g7IhI5PWI5-mGXEuLDcgnTqqD9xb3sdksPbMXDFgr2MSgaKcHl3sy-hEqH3Y2GmoFdWcxJaZMuDEaz4kHT61uCR7nsKKzuPUeh74sPfL7xDA_yTv9Hoa_6Pe7YMoP",
  videoSrc:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
};

export const DEFAULT_MODAL_REEL: ModalReelItem = {
  title: "2026 DIRECTOR & DP SHOWREEL",
  duration: "02:45 / 02:45",
  poster:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCH0HHwOtKgvMSYPAjo84U53RphlNBC3C-jDFvNucvmUDxl58LsVGPd0eJyRNE78-7UoP6lcGskwPl87RmKKptogNTh1IKBBHXpJfx3Lkp1niCHcHFMoFNHfVgBX1p1rCdApDhiVIeDqEWRDqG3nhFGdhY6WPZW1ABlUPEWP_K61cDzIs8V6OO1fSgPKijAnOy2Du_SHLTZxg5HPgy6yTLNZpNbmrj6qxa-LlldjlNG",
  videoSrc:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
};

export const CATEGORIES: {
  label: string;
  value: "all" | "narrative" | "commercial" | "music-video";
}[] = [
  { label: "ALL", value: "all" },
  { label: "NARRATIVE", value: "narrative" },
  { label: "COMMERCIAL", value: "commercial" },
  { label: "MUSIC VIDEO", value: "music-video" },
];

export const PROJECTS: Project[] = [
  {
    id: "sierra-ev",
    title: "Sierra EV",
    subtitle: "Launch Film",
    category: "commercial",
    portfolioCategory: "cinematography",
    description:
      "Celebrating the return of the iconic Tata Sierra through the voices of its customers. Bringing together their first impressions, personal experiences and honest feedback, the film explores the connection between the Sierra's legacy and its new generation. Concluding with its market response and the trust it has earned from customers.",
    client: "Kaveri Tata",
    production: "Maxcreato Productions",
    role: "Cinematography & Editing",
    poster: "https://vumbnail.com/1247723283.jpg",
    embedUrl:
      "https://player.vimeo.com/video/1247723283?title=0&byline=0&portrait=0&autopause=0&player_id=0&app_id=58479",
    // stills: [
    //   "https://vumbnail.com/1247723283.jpg",
    //   "https://vumbnail.com/1247723283.jpg",
    // ],
  },
  {
    id: "sierra-testimonial",
    title: "Sierra Customer",
    subtitle: "Testimonial Film",
    category: "commercial",
    portfolioCategory: "cinematography",
    poster: "https://vumbnail.com/1247726394.jpg",
    description:
      "Celebrating the return of the iconic Tata Sierra through the voices of its customers. Bringing together their first impressions, personal experiences and honest feedback, the film explores the connection between the Sierra's legacy and its new generation. Concluding with its market response and the trust it has earned from customers.",
    client: "Kaveri Tata",
    production: "Maxcreato Productions",
    role: "Cinematography & Editing",
    videoOrientation: "landscape",
    embedUrl:
      "https://player.vimeo.com/video/1247726394?title=0&byline=0&portrait=0&autopause=0&player_id=0&app_id=58479",
    // stills: [
    //   "https://vumbnail.com/1247726394.jpg",
    //   "https://vumbnail.com/1247726394.jpg",
    // ],
  },
  {
    id: "workez-walkthrough",
    title: "A SPACE OF POSSIBILITIES",
    subtitle: "WorkEZ Walkthrough",
    category: "commercial",
    portfolioCategory: "cinematography",
    description:
      "A visual walkthrough of WorkEZ Helix, exploring its thoughtfully designed workspaces, collaborative areas and modern interiors. Through composed frames and fluid camera movements, the film captures the character and atmosphere of a space built for productivity and collaboration.",
    client: "WorkEZ Helix, Chennai",
    production: "Plan B Productions",
    role: "Cinematography & Editing",
    videoOrientation: "landscape",
    poster: workezThumbnail.src,
    embedUrl:
      "https://player.vimeo.com/video/1247960038?title=0&byline=0&portrait=0&autopause=0&player_id=0&app_id=58479",
    // stills: [workezThumbnail.src, workezThumbnail.src],
  },
  {
    id: "papa-johns",
    title: "CRAFTED TO PERFECTION",
    subtitle: "Papa Johns • Spec Commercial",
    category: "commercial",
    poster: papaJohnsThumbnail.src,
    description:
      "An independent spec commercial for Papa Johns, created in Bengaluru. Exploring the craft behind pizza-making, the film follows the process from freshly prepared dough to the final golden bake, bringing attention to the ingredients, textures and details that make every step special.",
    brand: "Papa Johns",
    project: "Spec Commercial",
    role: "Independent Production - Cinematography, Editing & Color Grading",
    videoOrientation: "landscape",
    embedUrl:
      "https://player.vimeo.com/video/1247729292?autopause=0&player_id=0&app_id=58479",
    // stills: ["https://vumbnail.com/1247729292.jpg"],
  },
  {
    id: "slam-fitness",
    title: "LOCK ON LEVEL UP",
    subtitle: "SLAM Fitness Studio • Opening Promo",
    category: "commercial",
    portfolioCategory: "cinematography",
    poster: rifleThumbnail.src,
    // descriptionHeading: "LOCK OadsfaN. LEVEL UP.",
    description:
      "An action-inspired launch teaser created to build anticipation for the opening of SLAM Fitness Studio in Madurai. Using suspense, sharp visuals and a striking reveal, the film turns the anticipation of a new fitness destination into a cinematic experience.",
    client: "SLAM Fitness Studio, Madurai",
    production: "Maxcreato Productions",
    role: "Complete Production — Cinematography, Editing & Color Grading",
    videoOrientation: "portrait",
    embedUrl:
      "https://player.vimeo.com/video/1247979901?title=0&byline=0&portrait=0&autopause=0&player_id=0&app_id=58479",
    // stills: [rifleThumbnail.src, rifleThumbnail.src],
  },
  {
    id: "pothys-swarnamahal",
    title: "A REASON TO SHINE.",
    subtitle: "Pothys Swarna Mahal • Promotional Film",
    category: "commercial",
    portfolioCategory: "cinematography",
    description:
      "A promotional film created for Pothys Swarnamahal, highlighting its jewellery collections and special offers through an elegant, presenter-led visual narrative. Blending jewellery close-ups, showcase moments and the in-store experience, the film brings the excitement of the offer to life.",
    client: "Pothys Swarna Mahal",
    project: "Promotional Film",
    role: "Cinematography, Editing & Color Grading",
    videoOrientation: "portrait",
    poster: pothysThumbnail.src,
    embedUrl:
      "https://player.vimeo.com/video/1247735250?autopause=0&player_id=0&app_id=58479",
    // stills: [pothysThumbnail.src, pothysThumbnail.src],
  },
];
