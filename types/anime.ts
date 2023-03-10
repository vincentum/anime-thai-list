export interface Anime {
  name_jp: string;
  name_en: string;
  name_th: string;
  cover_link: string;

  seasons?: Season[];
}

export interface Season {
  name: string;

  sources?: Source[];
}

export interface Source {
  name: string;
  valid: boolean;
  link?: string;
  dub?: string[];
  sub?: string[];
}
