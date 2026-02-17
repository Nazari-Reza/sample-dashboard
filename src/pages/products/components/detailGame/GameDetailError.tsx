interface GameDetailErrorProps {
  message: string | null;
  onBack: () => void;
}

export function GameDetailError({ message, onBack }: GameDetailErrorProps) {
  return (
    <div className="text-center py-20">
      <p className="text-4xl mb-3">🕹️</p>
      <p className="text-slate-400 mb-4">{message ?? "Game not found"}</p>
      <button
        onClick={onBack}
        className="text-indigo-400 hover:text-indigo-300 text-sm underline"
      >
        ← Go back
      </button>
    </div>
  );
}
