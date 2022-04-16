// eslint-disable-next-line import/no-default-export
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the component?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'The name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: '.plop/templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/stories.tsx',
        templateFile: '.plop/templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: '.plop/templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/test.tsx',
        templateFile: '.plop/templates/test.tsx.hbs',
      },
    ],
  })
}
