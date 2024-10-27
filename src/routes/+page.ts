import type { CardType } from "$lib/types/card-type";
import type { PageLoad } from "./$types";

export const load: PageLoad = (): { cards: CardType[] } => {
  return {
    cards: [
      {
        id: 1,
        frontText: "Дом",
        backText: "Home",
      },
      {
        id: 2,
        frontText: "Яблоко",
        backText: "Apple",
      }
    ],
  };
};