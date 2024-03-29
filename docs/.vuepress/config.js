module.exports = {
    title: 'Apuntes',
    description: 'Scott Lin\'s notes',
    // base: "/apuntes/",
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['link', {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com/',
            crossorigin: 'anonymous'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
            integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
            crossorigin: 'anonymous'
        }],
    ],

    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-abbr'))
            // md.use(require('markdown-it-mark'))
            // md.use(require('markdown-it-underline'))
            // md.use(require('markdown-it-checkbox'))
            // md.use(require('markdown-it-imsize'))
            // md.use(require('markdown-it-math'))
        }
    },


    themeConfig: {
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        }
    },

    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/medium-zoom', {
                options: {
                    margin: 16,
                    background: '#262928'
                }
            }
        ]
    ]
}