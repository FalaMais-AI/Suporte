// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Página de Suporte',
  tagline: 'Página de suporte do FalaMais.AI',
  favicon: 'img/iconeSemFundo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://FalaMais-AI.github.io', // URL base do seu GitHub Pages
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Suporte/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FalaMais-AI', // Usually your GitHub org/user name.
  projectName: 'Suporte', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Fala Mais.AI',
        logo: {
          alt: 'Logo Fala Mais.AI',
          src: 'img/logo.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Suporte',
          },
          // {
          //   type: 'docSidebar', // Optional, u change in the sidebars.js
          //   sidebarId: 'testeSidebar',
          //   position: 'left',
          //   label: 'Teste',
          // },
        ],
      },
      footer: {
        links: [
          {
            title: 'Contato',
            items: [
              {
                html: 'contato@falamais.ai',
              },
              {
                label: 'WhatsApp',
                href: 'https://wa.me/5561996853842',
              },
            ],
          },
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fala.mais.ai/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/falamais-ai/',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Site',
                href: 'https://falamais.ai/?fbclid=PAZXh0bgNhZW0CMTEAAafSALIM-Y8aNgolzgpxYpzpmcXQakakLbRZC55fRtHpts4SaRhx2B3S2nCQQA_aem_uBYIdBS-vAdbTG3aUYZ5CQ',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FalaMais.AI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
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
  }),
};

export default config;
