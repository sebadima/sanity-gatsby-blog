export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ebd6977482f2bea0f1bbd68',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qkc6xs9t',
                  apiId: '12ca8180-e098-4000-b89e-6a363f9c3576'
                },
                {
                  buildHookId: '5ebd69779cbc31d7eceba90d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gqrye47w',
                  apiId: 'b781f52d-36b8-483b-9663-c7a267cb33dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sebadima/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gqrye47w.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
