import Image from "next/image";
import Link from "next/link";
import { Camera, Send } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import logo from "@/assets/Icons/logo-dark.svg";
import { Container, Content, Logo, Links, Socials, Copyright } from "./styles";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("Footer");

  return (
    <Container>
      <Content>
        <Logo>
          <Link href={`/${locale}`}>
            <Image src={logo} alt={t("logo")} width={132} height={36} />
          </Link>
          <p>{t("description")}</p>
        </Logo>
        <Links>
          <h3>{t("help")}</h3>
          <span>{t("securePayment")}</span>
          <span>{t("returns")}</span>
          <span>{t("faq")}</span>
        </Links>
        <Links>
          <h3>{t("links")}</h3>
          <Link href={`/${locale}`}>{t("home")}</Link>
          <Link href={`/${locale}`}>{t("products")}</Link>
          <span>{t("about")}</span>
        </Links>
        <Socials>
          <Camera size={22} />
          <Send size={22} />
        </Socials>
      </Content>
      <Copyright>{t("copyright")}</Copyright>
    </Container>
  );
}
