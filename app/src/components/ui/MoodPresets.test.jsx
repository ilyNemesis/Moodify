import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import MoodPresets from './MoodPresets.jsx'

const presets = [
    {
        id: 'cozy',
        label: 'Cozy',
        color: '#ff7a45',
        intensity: 2.5,
    },
    {
        id: 'focus',
        label: 'Focus',
        color: '#dbeafe',
        intensity: 3.8,
    }
]

describe ('MoodPresets', () => {
    it ('affiche un bouton pour chaque preset', () => {
        render (
            <MoodPresets presets={presets} />
        )

        expect(screen.getByRole('button', { name: 'Cozy' })).toBeTruthy()
        expect(screen.getByRole('button', { name: 'Focus' })).toBeTruthy()
    })

    it ('communique le preset sélectionné au parent', () => {
        const handlePresetSelect = vi.fn()

        render (
            <MoodPresets 
                presets={presets}
                onPresetSelect={handlePresetSelect}
            />
        )

        fireEvent.click(screen.getByRole('button', { name: 'Focus' }))

        expect(handlePresetSelect).toHaveBeenCalledWith(presets[1])
    })

    it ('indique le preset actif avec aria-pressed', () => {
        render (
            <MoodPresets 
                presets={presets}
                activePresetId='focus'
            />
        )

        const cozyButton = screen.getByRole('button', { name: 'Cozy' })
        const focusButton = screen.getByRole('button', { name: 'Focus' })

        expect(cozyButton.getAttribute('aria-pressed')).toEqual('false')
        expect(focusButton.getAttribute('aria-pressed')).toEqual('true')
    })
})