import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Varela_Round } from "@next/font/google";
import markdownComponents from "Components/markdown-components";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={markdownComponents}>
      <style jsx global>
        {`
          html, body {
            font-family: ${varelaRound.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
