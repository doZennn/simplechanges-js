import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>SteamGridDB Changelog</title>
        <meta name="title" content="SteamGridDB Changelog" />
        <meta name="description" content="See the latest updates and changes to SteamGridDB.com." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://changelog.steamgriddb.com/" />
        <meta property="og:title" content="SteamGridDB Changelog" />
        <meta property="og:description" content="See the latest updates and changes to SteamGridDB.com." />
        <meta property="og:image" content="/logo-512.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://changelog.steamgriddb.com/" />
        <meta property="twitter:title" content="SteamGridDB Changelog" />
        <meta property="twitter:description" content="See the latest updates and changes to SteamGridDB.com." />
        <meta property="twitter:image" content="/logo-512.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;1,400&amp;display=swap" rel="stylesheet" />
        <link rel="alternate" type="application/rss+xml" title="SteamGridDB Changelog" href="/rss.xml" />
      </Head>
      {children}
    </div>
  );
}
