const path = require('path')
const chalk = require('chalk')
const { execSync } = require('child_process')

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  })

  plop.setActionType('lint', (answers) => {
    const srcPath = path.join(__dirname, '../src/')
    const componentName = plop.getHelper('pascalCase')(answers.name)
    const componentsFiles = path.join(
      srcPath,
      'components',
      componentName,
      '**'
    )

    execSync(`prettier --write "${componentsFiles}"`)
    execSync(`eslint ${componentsFiles} --fix --ext .ts,.tsx`)

    return `\n\n ${chalk.bold.green(
      componentName
    )} component successfully created!\n`
  })
}
