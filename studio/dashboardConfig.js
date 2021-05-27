export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60b009e4049e63281358a4b0',
                  title: 'Sanity Studio',
                  name: 'sanity-softgoodstudio-studio',
                  apiId: 'da8a1eab-78f2-404a-9f88-2541afca45d4'
                },
                {
                  buildHookId: '60b009e381624f2c01e10ae6',
                  title: 'Blog Website',
                  name: 'sanity-softgoodstudio',
                  apiId: 'ea2de5bf-93fc-4d13-8c78-d61c387d9635'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ppphhhiiilll/sanity-softgoodstudio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-softgoodstudio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
