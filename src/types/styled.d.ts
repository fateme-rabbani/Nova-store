import "styled-components";
import type { lightTheme } from "@/shared/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof lightTheme.colors;
    mode: "light" | "dark";
  }
}
