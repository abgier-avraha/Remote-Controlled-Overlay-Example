import { type NextPage } from "next";
import { api } from "../utils/api";
import Head from "next/head";
import { useEffect } from "react";
import { ScoreBox } from "../components/score-box/score-box";
import { Container } from "../styles/index.css";

const Home: NextPage = () => {
  const fixtureFetcher = api.sync.get.useQuery();

  useEffect(() => {
    // TODO: replace with webhook subscription
    const t = setInterval(() => {
      void fixtureFetcher.refetch();
    }, 1000);
    return () => clearInterval(t);
  }, [fixtureFetcher]);

  if (!fixtureFetcher.data) {
    return null;
  }

  return (
    <div className={Container}>
      <Head>
        <title>Tennis Overlay Client</title>
      </Head>
      <ScoreBox fixture={fixtureFetcher.data} />
    </div>
  );
};

export default Home;
