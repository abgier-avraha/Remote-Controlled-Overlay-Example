import { type NextPage } from "next";
import { api } from "../utils/api";
import { ScoreBox } from "./components/score-box/score-box";
import Head from "next/head";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div>
      <Head>
        <title>Tennis Overlay Client</title>
      </Head>
      <ScoreBox />
    </div>
  );
};

export default Home;
