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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw', // ou 'throw' / 'ignore'
    },
  },
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
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
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: '/', // importante quando as docs estão na raiz

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
        // searchBarShortcutKeymap: "s", // Use 'S' key
        searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  // docusaurus.config.js
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],

  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        margin: 24,
        scrollOffset: 0,
      },
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    docs: {
      sidebar: {
        // Permite que a sidebar seja recolhida/expandida pelo usuário
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
     // title: 'Fala Mais.AI',
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
          label: 'Início',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Contato',
          items: [
            {label: 'contato@falamais.ai', href: 'mailto:contato@falamais.ai'},
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
      copyright: `Copyright © ${new Date().getFullYear()} FalaMais.AI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
