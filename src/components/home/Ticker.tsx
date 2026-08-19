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

export function Ticker() {
  const loop = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
