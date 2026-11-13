import { create } from "zustand";
import { ProductCategory, ProductSort } from "@/types/enums/product";

interface CatalogState {
  search: string;
  category: ProductCategory;
  sort: ProductSort;
  page: number;
  setSearch: (search: string) => void;
  setCategory: (category: ProductCategory) => void;
  setSort: (sort: ProductSort) => void;
  setPage: (page: number) => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  search: "",
  category: ProductCategory.All,
  sort: ProductSort.PriceAscending,
  page: 1,
  setSearch: (search) => set({ search, page: 1 }),
  setCategory: (category) => set({ category, page: 1 }),
  setSort: (sort) => set({ sort, page: 1 }),
  setPage: (page) => set({ page }),
}));
