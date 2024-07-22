import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Layout from "~/components/Layout";
import "~/styles/globals.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(fas);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <div className={GeistSans.className}>
        <Component {...pageProps} />
        </div>
      </Layout>
    </UserProvider>
  );
};

export default MyApp;
