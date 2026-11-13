import { ProductCategory, ProductSort } from "@/types/enums/product";
import type { Product } from "@/types/product";

export const PRODUCTS_PER_PAGE = 6;

interface ProductFilters {
  search: string;
  category: ProductCategory;
  sort: ProductSort;
  page: number;
  locale: string;
}

export function selectProducts(products: Product[], filters: ProductFilters) {
  const search = filters.search.trim().toLowerCase();

  let result = products.filter((product) =>
    product.title.toLowerCase().includes(search),
  );

  if (filters.category !== ProductCategory.All) {
    result = result.filter((product) => product.category === filters.category);
  }

  if (filters.sort === ProductSort.PriceAscending) {
    result.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === ProductSort.PriceDescending) {
    result.sort((a, b) => b.price - a.price);
  }

  const count = result.length;
  const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);

  let page = filters.page;

  if (page > totalPages) page = totalPages;
  if (page < 1) page = 1;

  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const items = result.slice(start, start + PRODUCTS_PER_PAGE);

  return { items, count, totalPages, page };
}
