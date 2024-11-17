import type { SetPreviewType } from "$lib/types/set-preview-type";
import type { PageLoad } from "../$types";

export const load: PageLoad = (): { setsPreview: SetPreviewType[] } => {
  return {
    setsPreview: [
      {
        id: 1,
        title: "Basic Vocabulary",
        termsCount: 12,
      },
      {
        id: 2,
        title: "Common Phrases",
        termsCount: 15,
      },
      {
        id: 3,
        title: "Travel Essentials",
        termsCount: 8,
      },
      {
        id: 4,
        title: "Daily Conversations",
        termsCount: 10,
      },
      {
        id: 5,
        title: "Business Terms",
        termsCount: 18,
      },
      {
        id: 6,
        title: "Idioms and Slang",
        termsCount: 20,
      },
      {
        id: 7,
        title: "Academic Vocabulary",
        termsCount: 14,
      },
      {
        id: 8,
        title: "Food and Dining",
        termsCount: 9,
      },
      {
        id: 9,
        title: "Shopping Phrases",
        termsCount: 11,
      },
      {
        id: 10,
        title: "Weather Vocabulary",
        termsCount: 7,
      },
      {
        id: 11,
        title: "Descriptive Adjectives",
        termsCount: 13,
      },
      {
        id: 12,
        title: "Verbs in Action",
        termsCount: 16,
      },
      {
        id: 13,
        title: "Colors and Shapes",
        termsCount: 5,
      },
      {
        id: 14,
        title: "Time and Numbers",
        termsCount: 6,
      },
      {
        id: 15,
        title: "Expressions of Emotion",
        termsCount: 17,
      },
    ],
  };
};