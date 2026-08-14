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
        intensity={2.5}
        onIntensityChange={vi.fn()}
      />,
    )

    fireEvent.change(screen.getByLabelText('Light color'), {
      target: { value: '#3366ff' },
    })

    expect(handleColorChange).toHaveBeenCalledWith('#3366ff')
  })

  it('communique la nouvelle intensité sous forme de nombre', () => {
    const handleIntensityChange = vi.fn()

    render(
      <LightControls
        color="#ff7a45"
        onColorChange={vi.fn()}
        intensity={2.5}
        onIntensityChange={handleIntensityChange}
      />,
    )

    fireEvent.change(screen.getByLabelText('Light intensity'), {
      target: { value: '3.4' },
    })

    expect(handleIntensityChange).toHaveBeenCalledWith(3.4)
  })
})
