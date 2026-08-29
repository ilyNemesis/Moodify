import { describe, expect, it } from 'vitest'
import { getActivePresetId } from './getActivePresetId.js'

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
  },
]

describe('getActivePresetId', () => {
  it("retourne l'identifiant du preset correspondant", () => {
    expect(getActivePresetId(presets, '#dbeafe', 3.8)).toBe('focus')
  })

  it("retourne null lorsque l'intensité ne correspond pas", () => {
    expect(getActivePresetId(presets, '#dbeafe', 2.5)).toBe(null)
  })

  it('retourne null lorsque la couleur ne correspond pas', () => {
    expect(getActivePresetId(presets, '#ff7a45', 3.8)).toBe(null)
  })
})