import { Project, FeaturedReelItem, ModalReelItem } from '@/types/portfolio';

export const FEATURED_REEL: FeaturedReelItem = {
  tag: 'DIRECTOR REEL',
  title: 'SELECTED WORKS • VOL. IV',
  badge: 'PREVIEW',
  poster:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDOycibJkLmvryhAEW8ij65M1eXbsCX1e-iwJWNB4OxkAl73psh5EnlXalOTNiMjgJyHnS1y0bkVfF6t80I71OW_7yJiixT0MO6gvowFydRX76g7IhI5PWI5-mGXEuLDcgnTqqD9xb3sdksPbMXDFgr2MSgaKcHl3sy-hEqH3Y2GmoFdWcxJaZMuDEaz4kHT61uCR7nsKKzuPUeh74sPfL7xDA_yTv9Hoa_6Pe7YMoP',
  videoSrc:
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
};

export const DEFAULT_MODAL_REEL: ModalReelItem = {
  title: '2026 DIRECTOR & DP SHOWREEL',
  duration: '02:45 / 02:45',
  poster:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCH0HHwOtKgvMSYPAjo84U53RphlNBC3C-jDFvNucvmUDxl58LsVGPd0eJyRNE78-7UoP6lcGskwPl87RmKKptogNTh1IKBBHXpJfx3Lkp1niCHcHFMoFNHfVgBX1p1rCdApDhiVIeDqEWRDqG3nhFGdhY6WPZW1ABlUPEWP_K61cDzIs8V6OO1fSgPKijAnOy2Du_SHLTZxg5HPgy6yTLNZpNbmrj6qxa-LlldjlNG',
  videoSrc:
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
};

export const CATEGORIES: { label: string; value: 'all' | 'narrative' | 'commercial' | 'music-video' }[] = [
  { label: 'ALL', value: 'all' },
  { label: 'NARRATIVE', value: 'narrative' },
  { label: 'COMMERCIAL', value: 'commercial' },
  { label: 'MUSIC VIDEO', value: 'music-video' },
];

export const PROJECTS: Project[] = [
  {
    id: 'time-machine',
    title: 'The Time Machine',
    subtitle: 'Narrative Short Film • 35mm',
    category: 'narrative',
    duration: '14 MIN',
    year: '2024',
    role: 'Director of Photography',
    camera: 'ARRI Alexa Mini LF • Cooke Anamorphic /i',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpplC6TGjGiDvtyWa9_PVifwIpE8Igg52y2ySqZC_fa-S33rky-MFyU-0YxFFVFUhBikfcdAEHTBQatBILxEFRCXsdcFM_M_POCPI6aPO5g6TZDu_bcqSPpM6ob4b8WaL4SwdY6dYXs6T6YT5sQKIlonMPJ7ErMIKItyw2ScliaQg-VkZAkD60NpTbeB2SCw5sqZHYnwfmJVZolmbWJ9z73qsWDjrIhkTyPK4LLGuQ',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    stills: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'believing-in-magic',
    title: 'Believing in Magic',
    subtitle: 'Shelly Archer • Official Music Video',
    category: 'music-video',
    duration: '03:48',
    year: '2024',
    role: 'Director & DP',
    camera: 'Sony FX9 • Master Primes',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBa8Vp0WsERziIlJ6wcq8yk2MnPQm8geiTUiABHp2BefjTl-ubu9LhnoqHLlt4cU9NfCHnCjotnXxyOQTz7dRb3FVZ3fDf4xqKcKBy1nGJehzsSGSCQUPZvhwdvyi9awR--czPaQAEKhgx547wG0JkcjKGXFqwEYscxZ5Tg2Kbnv3nA3w_m8OrBSecB8PLO8-NN8QKLcA-Gx7EkONeTtg6DH5_esQsTDyY61OIQQz3a',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    stills: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'shadow-play',
    title: 'Shadow Play',
    subtitle: 'Narrative Noir Title Sequence',
    category: 'narrative',
    duration: '01:20',
    year: '2023',
    role: 'Director of Photography',
    camera: 'RED V-Raptor • Vintage Kowa Anamorphic',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2QszJOqlWcWUC48YgeBwZ-72UuoB8GiiL0d2UNvjXK9D18fUSZd7iu_dkWDH1SQiWZe-t51A5yEVWOEBXkBPMrOcn5MogrDSWGzDRA6WCmMWwr4OaDwBHl5gaFXhOV2qPHAR-n4vH95BNfDkSvYSU6vthDYexrwdIIIzM8oxSPwFX7d9Kr6vCEWOyO4Khr2qA7VUDRkZr0o92SglGeKxg541mSXIx8oEI9WJGaFYb',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    stills: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'garff-luxury',
    title: 'Garff Luxury',
    subtitle: 'Automotive Brand Film',
    category: 'commercial',
    duration: '00:60',
    year: '2024',
    role: 'Cinematographer & Colorist',
    camera: 'ARRI Alexa 35 • Zeiss Supreme Radiance',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-c1n9bEo1JPyovQZoYMZSvtQcHwtc5J2hLKroZMSzhot6SyIK3kefxZ1xoxf9k3PQQfeRVwHirBycatCtub-9rJxHLkrfPTwxoWHyr8TxpGHvnF9P9vEUnbE6_sVbPjdIb5CrgcwVyVYPgRhu6S7Vd50R2mLOe1BvixTL_K7AICTX8Wi1MEifVO1iOJ-vTmVkRSH0Hgw9DD0YuluPSuMRShLWz8WO9kMAnCzkq1JH',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    stills: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'blooming-wounds',
    title: 'Blooming Wounds',
    subtitle: 'Psychological Drama Short',
    category: 'narrative',
    duration: 'SHORT',
    year: '2023',
    role: 'Director & DP',
    camera: 'ARRI Amira • Super 16mm Mode',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnEbp6ftHnYqrckYA8Rmg0ffy7fRFOKMyHd9qrVPkCvPwYqMBkjLPui3Rmfrccen9a95y1DcEu2ys_x6b5CCFeudB5XoTQMxBgsa9tZ3-e5fC4LX3eB_bLqdU19jlWasRETkOrCvyU9KZP06PVZqcPYxtqXVPUBj_S751jDYr3Y49tKD2fE_SUCmY4x0lT0N28QW32D4pSe7o3I9I9Ega2eXUG8NBCatlE5mTmOinu',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    stills: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'revelations',
    title: 'Revelations',
    subtitle: 'Independent Feature Trailer',
    category: 'narrative',
    duration: 'TRAILER',
    year: '2024',
    role: 'Director of Photography',
    camera: 'RED Monstro 8K VV • Leitz Primes',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAB0k3KhOdBSvjEtXI3Bl4z8LRdjB1v2ie8hsuD5rc90tFZeX1moz0M3oc9ue4KwVFAFsS1P4hJpTWgs9vm5cA9-f1muUkfmUN7KkP0HAZUDekSAxhnrxUTtbym1XS5dV4y_38cH_o9Dc4T_fzFu2cwZwlasB0LUJS8ydDSSkiG0t5HpqTBqMWME9pntrdpdsFboBGXkPlDZLWZocWnkSDjAsVAFIq7bHNG2pwuANJg',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    stills: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'moab-flats',
    title: 'Moab Flats',
    subtitle: 'Commercial Campaign • Anamorphic',
    category: 'commercial',
    duration: '01:00',
    year: '2023',
    role: 'Director & DP',
    camera: 'ARRI Alexa Mini • Hawk V-Lite Anamorphic',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDc20iRlm3SN6MmOGxOMd7ZX4m-sr0iCFsBVQ0DZPO1KvHENvfIPYUDMlgo1Kde7zEeVDcdkkw8yg2EmktTUOLjL2EiRz1ZquFJSlUMcAI1BrtvzJX1pvFYO4dnxSFxo93ukGLc-B3Xi6qWXsvnGdsQYHmCRohYxGRMJkEWTdkG6rA2k2VGyp7-MpHhef4nmqqKl4Fa-fV5ER93JSyR3bQt19uPZ8-9HmSJJSxXhbcG',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    stills: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'attention',
    title: 'Attention',
    subtitle: 'Performance Music Video',
    category: 'music-video',
    duration: '04:12',
    year: '2024',
    role: 'Cinematographer',
    camera: 'ARRI Alexa Mini LF • Master Anamorphic',
    poster:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDi4uMFGTGoYwrPPvclUVr3pHnsZWDgp7t9Ug2A1cJzoDKW8Im7ZRFJDkXH-msE23c_xGr1IJaes8_UaI-yyjfyv-Jf22DqHvHQO01rKJ73TqnBzMIzZNbiKaip5tZ6IRvLAYIQaAfriW76v8RKKfGBJ-65kV5j8NXCDnnbFKCi09vR418AwFl75BmAUnhZ6AECZY5XF6CB-X5yzGK4RXJ668v6Dflb2cFOmnxG7WjS',
    videoSrc:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    stills: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];
