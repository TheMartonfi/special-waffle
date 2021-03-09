import React from "react";
import type { AppProps } from "next/app";
import Amplify from "aws-amplify";
import awsConfig from "aws-exports";
import { Provider as StyletronProvider } from "styletron-react";
import { ThemeProvider } from "theme";
import { styletron } from "theme/styletron";

Amplify.configure(awsConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyletronProvider value={styletron}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyletronProvider>
  );
};

export default MyApp;
