import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
