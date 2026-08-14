export default function LightControls({ color, onColorChange }) {
  return (
    <aside className="light-controls" aria-label="Light settings">
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
    </aside>
  )
}
