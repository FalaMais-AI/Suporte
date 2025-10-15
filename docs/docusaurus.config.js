// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Página de Suporte',
  tagline: 'Página de suporte do FalaMais.AI',
  favicon: 'img/iconeSemFundo.png',

  future: {
    v4: true,
  },

  url: 'https://FalaMais-AI.github.io',
  baseUrl: '/Suporte/',

  organizationName: 'FalaMais-AI',
  projectName: 'Suporte',

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
   
    [
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
        // searchBarShortcutKeymap: "s", // Use 'S' key
        // searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    //   algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'YOUR_APP_ID',
    //   // Public API key: it is safe to commit it
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   // Optional: see doc section below
    //   contextualSearch: true,
    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: 'external\\.com|domain\\.com',
    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: '/docs/', // or as RegExp: /\/docs\//
    //     to: '/',
    //   },
    //   // Optional: Algolia search parameters
    //   searchParameters: {},
    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: 'search',
    //   // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    //   insights: false,
    // },
    navbar: {
      title: 'Fala Mais.AI',
      logo: {
        alt: 'Logo Fala Mais.AI',
        src: 'img/logo.png',
        href: '/docs/intro',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Suporte',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Contato',
          items: [
            {html: 'contato@falamais.ai'},
            {label: 'WhatsApp', href: 'https://wa.me/5561996853842'},
          ],
        },
        {
          title: 'Redes Sociais',
          items: [
            {label: 'Instagram', href: 'https://www.instagram.com/fala.mais.ai/'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/falamais-ai/'},
          ],
        },
        {
          title: 'Saiba Mais',
          items: [
            {label: 'Site', href: 'https://falamais.ai/'},
            {label: 'YouTube', href: 'https://www.youtube.com/@FalaMais_ai'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FalaMais.AI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
