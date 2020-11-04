import Layout from '../components/Layout';
import ChangeItem from '../components/ChangeItem';
import { getChanges } from '../lib/changes';

export default function Home({ changes }) {
  return (
    <Layout>
      <header>
        <h1>SteamGridDB Changelog</h1>
        <a href="https://trello.com/b/bhrqOQGX/steamgriddb-roadmap">Roadmap</a>
        {' • '}
        <a href="https://discord.gg/bnSVJrz">Discord</a>
        {' • '}
        <a href="https://www.steamgriddb.com/">SteamGridDB.com</a>
      </header>
      {changes.map((change, i) => <ChangeItem key={i} change={change} defaultCollapsed={i >= 3} />)}
    </Layout>
  );
}

export async function getStaticProps() {
  const changes = getChanges();
  return {
    props: {
      changes,
    },
  };
}
