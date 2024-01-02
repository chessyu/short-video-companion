import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText("Find in-depth information about Next.js features and API.")

    expect(heading).toBeInTheDocument()
  })
})















