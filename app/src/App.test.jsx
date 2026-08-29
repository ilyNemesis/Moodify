import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App.jsx'

vi.mock('@react-three/fiber', () => ({
  Canvas: () => null,
}))

vi.mock('@react-three/drei', () => ({
  Bounds: ({ children }) => <>{children}</>,
  OrbitControls: () => null,
}))

vi.mock('./components/scene/room.jsx', () => ({
  default: () => null,
}))

vi.mock('./components/scene/lights.jsx', () => ({
  default: () => null,
}))

describe('App', () => {
  it('ouvre et ferme le panneau de réglages avec le bouton mobile', () => {
    render(<App />)

    const menuButton = screen.getByRole('button', { name: 'Open settings' })
    const panel = screen.getByRole('region', {
      name: 'Create your atmosphere',
    })

    expect(menuButton.getAttribute('aria-expanded')).toBe('false')
    expect(panel.getAttribute('data-open')).toBe('false')

    fireEvent.click(menuButton)

    expect(menuButton.getAttribute('aria-expanded')).toBe('true')
    expect(panel.getAttribute('data-open')).toBe('true')

    fireEvent.click(menuButton)

    expect(menuButton.getAttribute('aria-expanded')).toBe('false')
    expect(panel.getAttribute('data-open')).toBe('false')
  })

  it('applique le preset sélectionné et le marque comme actif', () => {
    render(<App />)

    expect(
      screen.getByRole('region', { name: 'Create your atmosphere' }),
    ).toBeTruthy()

    expect(
      screen.getByRole('button', { name: 'Cozy' }).getAttribute('aria-pressed'),
    ).toBe('true')

    fireEvent.click(screen.getByRole('button', { name: 'Focus' }))

    expect(screen.getByLabelText('Light color').value).toBe('#dbeafe')
    expect(screen.getByLabelText('Light intensity').value).toBe('3.8')
    expect(
      screen.getByRole('button', { name: 'Focus' }).getAttribute('aria-pressed'),
    ).toBe('true')
  })
})
