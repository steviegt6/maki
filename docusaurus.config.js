// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maki',
  tagline: '',
  url: 'https://maki.tomat.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'steviegt6', // Usually your GitHub org/user name.
  projectName: 'maki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/steviegt6/maki/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/steviegt6/maki/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      announcementBar: {
        id: 'support_and_translations',
        content: '❤️ Like these docs and the work I do? Show your support <a href="/docs/meta/support">here</a>. // Want to help translate? See how <a href="/docs/meta/translating">here</a>. 🌐',
        backgroundColor: '#2e2e2e',
        textColor: '#ffffff',
      },
      navbar: {
        title: 'Maki',
        logo: {
          alt: 'My Discord Profile Picture Because I Believe That Is Neat',
          src: 'img/tomat.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Ramblings (Blog)', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: '/docs/meta/translating',
                label: 'Contribute Translations',
              }
            ]
          },
          {
            href: 'https://github.com/steviegt6/maki',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository'
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: "filler (unused, I swizzle'd the hell out of this guy)",
        links: [
          {
            title: 'Directories',
            items: [
              {
                label: 'Docs Homepage',
                to: '/docs/',
              },
              {
                label: 'Terraria/tModLoader Docs',
                to: '/docs/tmodloader/',
              },
              {
                label: 'Meta Docs',
                to: '/docs/meta/',
              },
              {
                label: "Ramblings (Blog)",
                to: '/blog',
              }
            ],
          },
          {
            title: 'Find Me',
            items: [
              {
                label: 'Personal Site',
                href: 'https://tomat.dev/',
              },
              {
                label: 'Discord',
                href: 'https://discord.tomat.dev/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/steviegt6/',
              },
            ],
          },
          {
            title: 'Support me',
            items: [
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/tomatophile',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/tomatophile',
              }
            ]
          },
          {
            title: 'tModLoader',
            items: [
              {
                label: 'tML Discord',
                href: 'https://tmodloader.net/discord',
              },
              {
                label: 'tML GitHub',
                href: 'https://github.com/tModLoader/tModLoader',
              },
              {
                label: 'tML Wiki',
                href: 'https://github.com/tModLoader/tModLoader/wiki',
              },
              {
                label: 'tML Docs',
                href: 'https://tmodloader.github.io/tModLoader/html/index.html'
              }
            ]
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
