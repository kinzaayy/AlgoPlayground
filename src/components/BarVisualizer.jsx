export default function BarVisualizer({ array }) {
  const maxValue = Math.max(...array, 1);

  return (
    <div className="bg-console-bg border border-console-border rounded-panel shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] p-4 sm:p-6">
      <div className="flex items-end justify-center gap-[2px] sm:gap-1 h-64 sm:h-80">
        {array.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-bar-idle rounded-t-sm transition-[height] duration-150 ease-out"
            style={{ height: `${(value / maxValue) * 100}%` }}
            title={String(value)}
          />
        ))}
      </div>
      <p className="font-mono text-xs text-ink-muted mt-3 text-center">
        {array.length} elements
      </p>
    </div>
  );
}