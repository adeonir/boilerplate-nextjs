import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const {
      container: { firstChild },
    } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument()

    expect(firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const {
      container: { firstChild },
    } = render(<Main />)

    expect(firstChild).toHaveStyleRule(`background-color: #051330`)
  })
})
