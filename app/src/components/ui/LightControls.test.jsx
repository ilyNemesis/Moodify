import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import LightControls from './LightControls.jsx'

describe('LightControls', () => {
  it('communique la nouvelle couleur choisie', () => {
    const handleColorChange = vi.fn()

    render(
      <LightControls
        color="#ff7a45"
        onColorChange={handleColorChange}
      />,
    )

    fireEvent.change(screen.getByLabelText('Light color'), {
      target: { value: '#3366ff' },
    })

    expect(handleColorChange).toHaveBeenCalledWith('#3366ff')
  })
})
