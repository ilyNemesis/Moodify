export default function LightControls({
  color,
  onColorChange,
  intensity,
  onIntensityChange,
}) {
  return (
    <aside className="light-controls" aria-label="Light settings" style={{ '--light-color': color }}>
      <label className="light-controls__field">
        <span>Light color</span>
        <input
          type="color"
          value={color}
          onChange={(event) => onColorChange(event.target.value)}
        />
        <output className="light-controls__value">
          {color.toUpperCase()}
        </output>
      </label>

      <label className="light-controls__field">
        <span>Light intensity</span>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={intensity}
          onChange={(event) => onIntensityChange(Number(event.target.value))}
        />
        <output className="light-controls__value">
          {intensity.toFixed(1)}
        </output>
        
      </label>
    </aside>
  )
}
