const items = [
  "Coming soon",
  "1v1",
  "2v2",
  "Bananas",
  "Choose your weapon",
  "Shooter",
  "Fighting",
  "Party game",
  "Don't slip",
  "Bruise 'em",
  "A-peel-ing",
  "Meta Quest",
];

export function Ticker({
  orientation = "horizontal",
}: {
  orientation?: "horizontal" | "vertical";
}) {
  const loop = [...items, ...items];
  const track = (
    <div className="ticker-track">
      {loop.map((item, index) => (
        <span key={`${orientation}-${item}-${index}`} className="ticker-item">
          <span className="ticker-dot" />
          {item}
        </span>
      ))}
    </div>
  );

  if (orientation === "vertical") {
    return (
      <div className="ticker ticker-vertical" aria-hidden="true">
        <div className="ticker-rotator">{track}</div>
      </div>
    );
  }

  return (
    <div className="ticker" aria-hidden="true">
      {track}
    </div>
  );
}
