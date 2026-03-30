import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  describe('handleClick', () => {
    it('renders the counter button with initial count of 0', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /count is 0/i })).toBeDefined()
    })

    it('increments the count by 1 when the button is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      const button = screen.getByRole('button', { name: /count is 0/i })
      await user.click(button)
      expect(screen.getByRole('button', { name: /count is 1/i })).toBeDefined()
    })

    it('increments the count on each successive click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const button = screen.getByRole('button', { name: /count is 0/i })
      await user.click(button)
      await user.click(button)
      await user.click(button)
      expect(screen.getByRole('button', { name: /count is 3/i })).toBeDefined()
    })

    it('does not change the count when the button has not been clicked', () => {
      render(<App />)
      expect(screen.queryByRole('button', { name: /count is 1/i })).toBeNull()
    })
  })
})