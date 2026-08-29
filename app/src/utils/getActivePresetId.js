export function getActivePresetId(presets, color, intensity) {
  const activePreset = presets.find(
    (preset) => preset.color === color && preset.intensity === intensity,
  )

  return activePreset?.id ?? null
}