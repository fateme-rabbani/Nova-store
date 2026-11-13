import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Product } from "@/types/product";
import {
  Card,
  Picture,
  Details,
  Category,
  Title,
  Bottom,
  Price,
  Rating,
} from "./styles";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("Products");

  return (
    <Card>
      <Picture>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </Picture>
      <Details>
        <Category>{t(`categories.${product.category}`)}</Category>
        <Title dir="auto">{product.title}</Title>
        <Bottom>
          <Price>
            {product.price} {t("currency")}
          </Price>
          <Rating>
            <Star size={16} fill="yellow" stroke="yellow" />
            <span>{product.rating.rate}</span>
            <span>({product.rating.count})</span>
          </Rating>
        </Bottom>
        <AddToCartButton product={product} />
      </Details>
    </Card>
  );
}
