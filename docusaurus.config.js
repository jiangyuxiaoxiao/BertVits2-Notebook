// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BertVits2',
  tagline: '使用文档',
  favicon: 'img/Hiyori.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jiangyuxiaoxiao/BertVits2-Notebook',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BertVits2',
        logo: {
          alt: 'Hiyori',
          src: 'img/Hiyori.ico',
        },
        items: [
          {
            type: 'docsVersionDropdown',
          },
          {to: 'docs/教程', label: '教程', sidebarId: 'docsSidebar',position: 'left'},
          {to: 'docs/下载', label: '下载', sidebarId: 'downloadSidebar',position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jiangyuxiaoxiao/BertVits2-Notebook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '相关项目',
            items: [
              {
                label: 'Bert-Vits2',
                to: 'https://github.com/fishaudio/Bert-VITS2',
              },
              {
                label: 'Hiyori UI',
                to: 'https://github.com/jiangyuxiaoxiao/Bert-VITS2-UI',
              },
              {
                label: 'Bert-Vits2 文档',
                to: 'https://github.com/jiangyuxiaoxiao/BertVits2-Notebook',
              },
            ],
          },
          {
            title: '社区生态',
            items: [
              {
                label: 'Bert-Vits2 Nonebot2插件',
                to: 'https://github.com/jiangyuxiaoxiao/nonebot-plugin-bertvits2',
              },
              {
                label: '原神语音合成',
                to: 'https://v2.genshinvoice.top/',
              }
            ],
          },
          {
            title: '推荐项目',
            items: [
              {
                label: '妃爱 Bot',
                to: 'https://github.com/jiangyuxiaoxiao/Hiyori',
              }
            ],
          }
        ],
        copyright: `Hiyori Wiki`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell'],

      },
    }),
};

export default config;
