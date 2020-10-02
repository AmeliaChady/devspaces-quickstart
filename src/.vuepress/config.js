module.exports = {
  title: 'Cloud-Native Application Development',
  description: 'Cloud-Native Application Development tutorials, tricks, tips, and methods.',
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/theme/index.js',
    '.vuepress/theme/components/*.vue'
  ],
  themeConfig: {
    logo: '/Logo.svg',
    nextLinks: false,
    prevLinks: false,
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tracks', link: '/tracks/' },
      { text: 'Links', link: '/links/'} /**,
      { text: 'Blog', link: '/blog/' },
      { text: 'Podcasts', link: '/podcasts/' } */
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Links',
        path: '/links/',
        collapsable: true,
        sidebarDepth: -2,
        initialOpenGroupIndex: -1
      },
      {
        title: 'Tracks',
        path: '/tracks/',
        collapsable: true,
        sidebarDepth: -2,
        initialOpenGroupIndex: 0,
        children: [
          {
            title: 'Contract-First',
            path: '/tracks/contract-first/',
            collapsable: true,
            sidebarDepth: -1,
            children: [
              '/tracks/contract-first/introduction-to-openapi-and-apicurio',
              '/tracks/contract-first/openapi-generator',
              '/tracks/contract-first/customizing-openapi-generator-templates',
              '/tracks/contract-first/automated-testing-with-schemathesis',
              '/tracks/contract-first/security-with-openapi',
              '/tracks/contract-first/contract-first-for-ui-development'
            ]
          },
          {
            title: 'Behavior-Driven Development',
            path: '/tracks/bdd/',
            collapsable: true,
            sidebarDepth: -1
          },
          {
            title: 'Serverless',
            path: '/tracks/serverless/',
            collapsable: true,
            sidebarDepth: -1,
            children: [
              '/tracks/serverless/overview-of-serverless-landscape',
              '/tracks/serverless/intro-to-debezium-cdc',
              '/tracks/serverless/serverless-cloud-native-runtimes',
              '/tracks/serverless/serverless-deployments',
              '/tracks/serverless/knative-eventing'
            ]
          },
          {
            title: 'Developer Tools',
            path: '/tracks/devtools/',
            collapsable: true,
            sidebarDepth: -1,
            children: [
              '/tracks/devtools/owasp-dependency-check',
              '/tracks/devtools/owasp-zap-hud',
              '/tracks/devtools/npm-audit-ci-wrapper'
            ]
          }
        ]
      }
    ]
  }
}
