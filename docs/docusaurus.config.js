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
          routeBasePath: '/',
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
      require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        hashed: true,
         // language: ['en'], // se quiser suporte a português
      }),
    ],
  ],

  themeConfig: {
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
