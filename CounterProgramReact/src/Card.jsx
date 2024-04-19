import  { useState } from 'react';
import styles from './Card.module.css'; // Assuming Card.module.css is in the same directory

function Card() {
  const [count, setCount] = useState(0); // Initialize count state

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1); // Update count using prevCount
  };

  const handleSubtract = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0)); // Prevent negative count
  };

  const handleReset = () => {
    setCount(0); // Reset count to 0
  };

  return (
    <div className={styles.countContainer}> {/* Corrected class name */}
      <p className={styles.countDisplay}>{count}</p>
      <button className={styles.countButton} onClick={handleAdd}>+</button>
      <button className={styles.countButton} onClick={handleSubtract}>-</button>
      <button className={styles.countButton} onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Card;