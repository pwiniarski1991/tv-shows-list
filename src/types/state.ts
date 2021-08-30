import { Show } from "./show";

export type TVShow = { score: number; show: Show };

export type State = {
  tvShows: TVShow[];
  error: string;
  isLoading: boolean;
}