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
      {
        type: 'append',
        path: '../src/components/index.ts',
        pattern: /export.*.*\n(?!export)/g,
        template:
          "export { {{pascalCase name}} } from './{{pascalCase name}}'\n",
        separator: '',
      },
      {
        type: 'prettify',
      },
    ],
  })

  plop.setActionType('prettify', (answers) => {
    const srcPath = path.join(__dirname, '../src/')
    const eslintPath = path.join(__dirname, '../', '.eslintrc.json')
    const generatorName = plop.getHelper('pascalCase')(answers.name)
    const generatorFiles = path.join(srcPath, 'components', generatorName, '**')

    execSync(`prettier --write "${generatorFiles}"`)
    execSync(
      `eslint ${generatorFiles} --fix --ext .ts,.tsx --config ${eslintPath}`
    )

    return `\n\n ${chalk.bold.green(
      generatorName
    )} component successfully created!\n`
  })
}
