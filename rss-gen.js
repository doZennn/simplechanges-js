const fs = require('fs');
const path = require('path');
const { Feed } = require('feed');
const dayjs = require('dayjs');

const changesDir = path.join(process.cwd(), 'changes');

const feed = new Feed({
  title: 'SteamGridDB Changelog',
  description: 'SteamGridDB Changelog',
  link: 'https://changelog.steamgriddb.com/',
  image: 'https://changelog.steamgriddb.com/logo-512.png',
  favicon: 'https://changelog.steamgriddb.com/favicon.ico',
  updated: new Date(),
});

fs.readdirSync(changesDir).forEach((time) => {
  const date = time.replace(/_/g, ':').replace('.yml', '');
  feed.addItem({
    title: dayjs(date).format('MMM D, YYYY h:mm A'),
    id: date,
    link: `https://changelog.steamgriddb.com/#${date}`,
  });
});

fs.writeFileSync('public/rss.xml', feed.rss2());
