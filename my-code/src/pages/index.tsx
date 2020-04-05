import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';

const Home = () => {
  return (
    <Layout>
      <main className="Home">
        <Card />
      </main>
      <style jsx>{`
        .Home {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
      `}</style>
    </Layout>
  );
};

export default Home;
