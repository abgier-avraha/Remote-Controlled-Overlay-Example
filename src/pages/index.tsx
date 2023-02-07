import { type NextPage } from "next";
import { api } from "../utils/api";
import { ScoreBox } from "./components/score-box/score-box";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  const fixtureFetcher = api.sync.get.useQuery();

  useEffect(() => {
    // TODO: replace with webhook subscription
    const t = setTimeout(() => {
      void fixtureFetcher.refetch();
    }, 1000);
    return () => clearTimeout(t);
  }, [fixtureFetcher]);

  if (!fixtureFetcher.data) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Tennis Overlay Client</title>
      </Head>
      <ScoreBox fixture={fixtureFetcher.data} />
    </div>
  );
};

export default Home;
