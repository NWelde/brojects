import { useEffect, useState } from "react";

function My() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`; // Update document title on count change (corrected syntax)
  }, [count, color]);

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1); // Use functional update
  };

  const handleSubtract = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0)); // Prevent negative count
  };

  const handleChangeColor = () => {
    setColor(color => ( color === "green" ? "red" : "green")); // Functional update with clear naming
  };

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <br />
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default My;