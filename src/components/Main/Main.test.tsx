import { render, screen } from '~/utils/tests'

import { Main } from '.'

const props = {
  title: 'NextJS Boilerplate',
  description:
    'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
}

describe('<Main />', () => {
  it('renders the heading', () => {
    const { container } = render(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.description })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the colors correctly', () => {
    const { container } = render(<Main {...props} />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#051330')
  })
})
