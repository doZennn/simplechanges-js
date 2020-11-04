import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>SteamGridDB Changelog</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;1,400&amp;display=swap" rel="stylesheet" />
        <link rel="alternate" type="application/rss+xml" title="SteamGridDB Changelog" href="/rss.xml" />
      </Head>
      {children}
    </div>
  );
}
