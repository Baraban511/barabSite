import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function App({ Component, url }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BarabSite</title>
      </head>
      <body>
        <Header active={url.pathname} />
        <Component />
        <Footer />
      </body>
    </html>
  );
}