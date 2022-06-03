import type { NextPage } from 'next';

import TitleList from '@title/TitleList';

import Layout from '@common/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <TitleList />
    </Layout>
  );
};

export default Home;
