import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import quotes from "../../static/data/quotes.json";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Subtitle />
        <div className={styles.buttons + " hero__buttons"}>
          <Link className="button button--secondary button--lg homepage-button" to="/docs">
            📜 General Documentation
          </Link>
          <Link
            className="button button--secondary button--lg homepage-button"
            to="/docs/tmodloader"
          >
            🌳 tModLoader Documentation
          </Link>
          <Link
            className="button button--secondary button--lg homepage-button"
            to="/docs/meta"
          >
            ⚙️ Meta Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function Subtitle() {
  const [subtitle, setSubtitle] = useState(["", ""]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setSubtitle("");
      return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSubtitle(quotes[randomIndex]);
    console.log('test');
  });

  return <p className="hero__subtitle">&quot;{subtitle[0]}&quot; — {subtitle[1]}</p>;
}

export default function Home() {
  return (
    <Layout
      title={`Homepage`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
