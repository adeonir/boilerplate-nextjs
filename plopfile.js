// eslint-disable-next-line import/no-default-export
module.exports = async (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name is your component name?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'The name is required'
        },
      },
    ],
    actions: [],
  }),
    await plop.load('plop-action-eslint')
}
