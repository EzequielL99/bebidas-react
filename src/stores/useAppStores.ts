import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";
// SLICE PATTERN
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
  }))
);
