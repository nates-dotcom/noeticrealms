const items = [
  "1v1",
  "Bananas",
  "Pistols",
  "Katanas",
  "Red vs blue",
  "Talk trash",
  "Meta Quest",
  "PCVR",
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
