import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Varela_Round } from "@next/font/google";
import Head from "next/head";
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
          html,
          body {
            font-family: ${varelaRound.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Nadya Pratiwi Blog" />
      </Head>
      <div className="w-full max-w-lg m-auto">
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  );
}
