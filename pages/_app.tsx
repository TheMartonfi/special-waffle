import React from "react";
import type { AppProps } from "next/app";
import Amplify from "aws-amplify";
import awsConfig from "aws-exports";

Amplify.configure(awsConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
