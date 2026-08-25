
// ajouté activePresetId et onPresetSelect

export default function MoodPresets({ presets }) {

    return (
        <div className='mood-presets'>
            {presets.map((preset) => (
                <button key={preset.id} type="button">
                    {preset.label}
                </button>
            ))}
        </div>
    )
}