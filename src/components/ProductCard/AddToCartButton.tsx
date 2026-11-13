"use client";

import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/storage/cart";
import Button from "@/shared/Button";
import type { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const t = useTranslations("Products");
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Button
      rightIcon={<ShoppingCart size={18} />}
      onClick={() => addItem(product)}
    >
      {t("addToCart")}
    </Button>
  );
}
