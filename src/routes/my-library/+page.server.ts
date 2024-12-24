import prisma from "$lib/prisma";
import type { SetPreviewType } from "$lib/types/set-preview-type";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (): Promise<{ setsPreview: SetPreviewType[]; }> => {
  const cardSets = await prisma.cardSet.findMany({
    include: {
      _count: {
        select: { cards: true },
      },
    },
  });

  const cardSetsPreview = cardSets.map((cardSet): SetPreviewType => {
    return {
      id: cardSet.id,
      title: cardSet.title,
      termsCount: cardSet._count.cards ?? 0
    }
  })

  return {
    setsPreview: cardSetsPreview,
  };
};