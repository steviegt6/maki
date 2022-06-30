import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Comprehensive",
    //Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        I like writing words. I talk a lot. You will have a lot to read.
        <br />
        (Of course, I try to make things clear and concise.)
      </>
    ),
  },
  {
    title: "Guides and Other Details",
    //Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Among other things, included are guides and other pieces of writing designed to aid you in learning. Practical examples included.
      </>
    ),
  },
  {
    title: "cirno bottle",
    //Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾
        <br />
        ⭐ Star this repository <a href="https://github.com/steviegt6/maki">on GitHub</a>, contribute if you please.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : <></>}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
