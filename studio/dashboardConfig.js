export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61963e6b22e9ab1d19faee19',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hx5wb9hx',
                  apiId: '3f53c828-561e-42a7-993c-a98583e0368a'
                },
                {
                  buildHookId: '61963e6b69f4d5134fcce725',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-547yp6o6',
                  apiId: '6d04b64f-50d8-417d-ae03-2075c54adfda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Adamation/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-547yp6o6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
