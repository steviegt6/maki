import React from "react";
export default function FooterCopyright({ copyright }) {
  return <CopyrightContents />;
}

function CopyrightContents() {
  return (
    <div>
      <CopyrightBody /> <Separator /> <DocusaursBody />
    </div>
  );
}

function CopyrightLine() {
  return `Copyright © ${new Date().getFullYear()}`;
}

function NameLink() {
  return (
    <a href="https://tomat.dev/" className="footer__name">
      Tomat
    </a>
  );
}

function CopyrightBody() {
  return (
    <>
      <CopyrightLine /> <NameLink />
    </>
  );
}

function Separator() {
  return <span className="footer__separator">//</span>;
}

function DocusaurusLink() {
  return (
    <a href="https://docusaurus.io/" className="footer__docusaurus">
      Docusaurus
    </a>
  );
}

function DocusaursBody() {
  return (
    <>
      Built with <DocusaurusLink />.
    </>
  );
}
