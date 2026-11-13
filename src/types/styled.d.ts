import "styled-components";
import type { lightTheme } from "@/shared/Theme/theme";

type AppTheme = {
  mode: "light" | "dark";
  colors: typeof lightTheme.colors;
};

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
