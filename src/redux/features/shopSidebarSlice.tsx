// shopSidebarSlice.ts
import { shopData } from "@/data/Data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { createSelector } from "reselect";
import { ShopItem } from "@/types";

interface ShopSidebarState {
  isGridView: boolean;
  itemsPerPage: number;
  sorting: string;
  currentPage: number;
  selectedCategories: string[];
  shopData: ShopItem[];
  selectedColorFilters: string[];
  minPrice: number;
  maxPrice: number;
}
const showShopData = shopData.slice(0, 18);

const initialState: ShopSidebarState = {
  isGridView: true,
  itemsPerPage: 12,
  sorting: "menu_order",
  currentPage: 1,
  selectedCategories: [],
  shopData: showShopData,
  selectedColorFilters: [],
  minPrice: 0,
  maxPrice: 1000,
};

const shopSidebarSlice = createSlice({
  name: "shopSidebar",
  initialState,
  reducers: {
    setView: (state) => {
      state.isGridView = !state.isGridView;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
      state.currentPage = 1;
    },
    nextPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setShopData: (state, action: PayloadAction<ShopItem[]>) => {
      state.shopData = action.payload;
    },
    // New action to set selected categories
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
    // Add a new action to update selected color filters
    setSelectedColorFilters: (state, action: PayloadAction<string[]>) => {
      state.selectedColorFilters = action.payload;
    },
    // Action to set the price range
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
  },
});

export const {
  setView,
  setItemsPerPage,
  setSorting,
  nextPage,
  setShopData,
  setSelectedCategories,
  setSelectedColorFilters,
  setPriceRange,
} = shopSidebarSlice.actions;

// Updated selector to include category filtering
export const selectShopSidebarState = (state: RootState) => state.shopSidebar;

export const selectFilteredShopSidebarData = createSelector(
  [selectShopSidebarState],
  (shopSidebar) => {
    const {
      sorting,
      itemsPerPage,
      currentPage,
      shopData,
      selectedCategories,
      selectedColorFilters,
      minPrice,
      maxPrice,
    } = shopSidebar;

    // Filter shop data based on selected categories and colors
    const filteredShopData = shopData.filter((item) => {
      const isInSelectedCategories =
        selectedCategories.length === 0 ||
        (item.category && selectedCategories.includes(item.category));
      const isInSelectedColors =
        selectedColorFilters.length === 0 ||
        (item.color && selectedColorFilters.includes(item.color));
      const isWithinPriceRange =
        item.price >= minPrice && item.price <= maxPrice;

      return isInSelectedCategories && isInSelectedColors && isWithinPriceRange;
    });

    // Calculate total amount and total pages based on the filtered data
    const totalItems = filteredShopData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const sortedShopData = [...filteredShopData].sort((a, b) => {
      switch (sorting) {
        case "popularity":
          // Placeholder logic for popularity
          return (b.popularity || 0) - (a.popularity || 0);
        case "rating":
          // Placeholder logic for rating
          return (b.rating || 0) - (a.rating || 0);
        case "price":
          // Placeholder logic for price: low to high
          return a.price - b.price;
        case "price-desc":
          // Placeholder logic for price: high to low
          return b.price - a.price;
        default:
          // Default sorting (menu_order or any other sorting option)
          // Add your logic here if needed
          break;
      }
      // Return 0 for no change in order if none of the cases match
      return 0;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sortedShopData.length); // Ensure endIndex doesn't exceed the length of sortedShopData

    return {
      currentItems: sortedShopData.slice(startIndex, endIndex),
      totalItems,
      totalPages,
    };
  }
);

export default shopSidebarSlice.reducer;
