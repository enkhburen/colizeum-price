import { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";
import { useSSR } from "@nextui-org/react";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({ type: "dark" });
  const { isBrowser } = useSSR();

  return (
    isBrowser && (
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}

export default MyApp;
