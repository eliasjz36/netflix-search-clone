import type { GetServerSideProps, NextPage } from 'next';

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

// keep the query params in the url
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
