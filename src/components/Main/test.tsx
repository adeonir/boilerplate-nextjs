import { render, screen } from 'utils/test-utils'

import { Main } from '.'

const content = {
  title: 'NextJS Boilerplate',
  description:
    'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main {...content} />)

    expect(
      screen.getByRole('heading', { name: content.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: content.description })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main {...content} />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#051330')
  })
})
