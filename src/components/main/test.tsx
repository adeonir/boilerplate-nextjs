import { render, screen } from '~/utils/tests'

import { Main } from '.'

const props = {
  title: 'Next.js Boilerplate',
  description: 'Next.js, TypeScript, Tailwind, Storybook, Vitest, Cypress and Testing-Library',
}

describe('<Main />', () => {
  it('should render the headings', () => {
    const { container } = render(<Main {...props} />)

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: props.description })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
