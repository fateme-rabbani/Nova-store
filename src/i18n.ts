import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { routing } from "@/utils/routing";

export default getRequestConfig(async () => {
  const currentLocale = await rootParams.locale();

  if (!hasLocale(routing.locales, currentLocale)) {
    notFound();
  }

  return {
    locale: currentLocale,
    messages: (await import(`./dictionary/${currentLocale}.json`)).default,
  };
});
