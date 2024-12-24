import prisma from "$lib/prisma";
import type { SetType } from "$lib/types/set-type";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { CardType } from "$lib/types/card-type";

export const load: PageServerLoad = async ({ params }): Promise<{ set: SetType; }> => {
  const cardSet = await prisma.cardSet.findUnique({
    where: { id: Number(params.slug)},
    include: { cards: true },
  })
  if (cardSet === undefined || cardSet === null) {
    throw error(404, "CardSet not found");
  }

  const cardSetModel: SetType = {
    id: cardSet.id,
    title: cardSet.title,
    description: cardSet.description,
    cards: cardSet.cards.map((card): CardType => {
      return {
        id: card.id,
        term: card.term,
        definition: card.definition,
        example: "",
      }
    })
  };

  return {
    set: cardSetModel,
  }
}