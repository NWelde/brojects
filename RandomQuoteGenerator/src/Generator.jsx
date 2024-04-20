import { useState,useEffect } from "react";
import styles from "./Generator.module.css"; // Import styles

function Generator() {
  const URL = 'https://api.quotable.io/random'; // Quotable.io API endpoint
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added state for loading indicator
  const [error, setError] = useState(null); // Added state for error handling

  const fetchQuote = async () => {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.response}`);
      }
      const data = await response.json();
      setQuote(data.content); // Access quote from "content" property in Quotable.io response
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message); // Set error state
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or error
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); // Empty dependency array: fetch data only once after component mounts

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Quote Generator</h1>
      {isLoading ? (
        <p className={styles.loading}>Loading...</p>
      ) : error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : (
        <>
          <p className={styles.quote}>{quote}</p>
          <p className={styles.author}>- {author}</p>
          <button className={styles.button} onClick={fetchQuote}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
}

export default Generator;