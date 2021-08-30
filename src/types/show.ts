export interface Show {
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  officalSite: string | null;
  schedule: {
    time: string;
    days: string[];
  }
  rating: {
    average: null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    webChannel: null;
    dvdCountry: null;
    externals: {
      tvrage: null;
      thevdb: null;
      imb: null;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      }
    }
  };
}