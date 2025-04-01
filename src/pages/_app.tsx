import type { AppProps } from "next/app";
import CustomThemeProvider from "../styles/CustomThemeProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
