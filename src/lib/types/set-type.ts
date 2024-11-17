import type { CardType } from "./card-type";

export interface SetType {
  id: number;
  title: string;
  description: string;
  cards: CardType[];
}