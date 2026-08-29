export default function MoodPresets({ presets, activePresetId, onPresetSelect }) {

    return (
        <div className='mood-presets'>
            {presets.map((preset) => (
                <button 
                  key={preset.id} 
                  type="button" 
                  onClick={() => onPresetSelect(preset)}
                  aria-pressed={activePresetId === preset.id}
                >
                    {preset.label}
                </button>
            ))}
        </div>
    )
}