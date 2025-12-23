import React from 'react';

const MathBackground = () => {
  const mathSymbols = ['∑', '∫', 'π', '∞', '√', '∂', 'Δ', 'α', 'β', 'θ', '∇', 'Ω', 'λ', 'μ', 'σ'];
  
  const generateRandomSymbols = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      fontSize: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5,
      rotation: Math.random() * 360
    }));
  };

  const symbols = generateRandomSymbols();

  return (
    <div className="math-background">
      <div className="math-symbols">
        {symbols.map((item) => (
          <div
            key={item.id}
            className="math-symbol"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              fontSize: `${item.fontSize}px`,
              opacity: item.opacity,
              transform: `rotate(${item.rotation}deg)`
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathBackground;
