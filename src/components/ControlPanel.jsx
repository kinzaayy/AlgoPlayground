export default function ControlPanel({ size, onSizeChange, speed, onSpeedChange, onGenerate }) {
  return (
    <div className="bg-console-panel border border-console-border rounded-panel p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
      <button
        onClick={() => onGenerate()}
        className="px-5 py-2.5 rounded-panel bg-action hover:bg-action-hover text-white font-display font-semibold text-sm transition-colors"
      >
        New Array
      </button>

      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs text-ink-muted font-display">Array Size</label>
          <span className="font-mono text-xs text-ink-primary">{size}</span>
        </div>
        <input
          type="range"
          min={10}
          max={100}
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className="accent-action"
        />
      </div>

      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs text-ink-muted font-display">Speed</label>
          <span className="font-mono text-xs text-ink-primary">{speed}</span>
        </div>
        <input
          type="range"
          min={1}
          max={100}
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="accent-action"
        />
      </div>
    </div>
  );
}