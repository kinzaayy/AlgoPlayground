import { useArray } from "./hooks/useArray";
import BarVisualizer from "./components/BarVisualizer";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const { array, size, speed, setSpeed, changeSize, regenerate } = useArray(40);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <header>
          <h1 className="font-display font-bold text-2xl sm:text-3xl">
            Algo<span className="text-action">Playground</span>
          </h1>
          <p className="text-ink-muted text-sm mt-1">
            Watch sorting algorithms think, one comparison at a time.
          </p>
        </header>

        <BarVisualizer array={array} />

        <ControlPanel
          size={size}
          onSizeChange={changeSize}
          speed={speed}
          onSpeedChange={setSpeed}
          onGenerate={regenerate}
        />
      </div>
    </div>
  );
}