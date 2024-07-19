import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import Layout from "~/components/Layout";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


config.autoAddCss = false;
library.add(fas);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
};

export default MyApp;
