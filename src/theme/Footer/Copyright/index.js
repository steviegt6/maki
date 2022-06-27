import React from 'react';
export default function FooterCopyright({copyright}) {
  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      // dangerouslySetInnerHTML={{__html: copyright}}
    >{copyright} <span className="footer__separator">//</span> Built with <a href="https://docusaurus.io/" className="footer__docusaurus">Docusaurus</a>.</div>
  );
}
