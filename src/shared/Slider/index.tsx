import Image, { type StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import SliderControls, { ProductsButton } from "./SliderControls";
import { Slide, Banner, Content, Copy } from "./styles";

interface SliderProps {
  images: {
    desktop: StaticImageData;
    mobile: StaticImageData;
  }[];
}

export default function Slider({ images }: SliderProps) {
  const locale = useLocale();
  const t = useTranslations("HeroSlider");

  return (
    <SliderControls
      labels={images.map((_, index) => t("slide", { number: index + 1 }))}
    >
      {images.map((image, index) => (
        <Slide key={index}>
          <Banner>
            <source media="(max-width: 767px)" srcSet={image.mobile.src} />
            <Image src={image.desktop} alt="" fill sizes="100vw" />
          </Banner>

          <Content>
            <Copy dir={locale === "fa" ? "rtl" : "ltr"}>
              <h2>{t("title")}</h2>
              <p>{t("description")}</p>
              <ProductsButton
                text={t("viewProducts")}
                isRtl={locale === "fa"}
              />
            </Copy>
          </Content>
        </Slide>
      ))}
    </SliderControls>
  );
}
