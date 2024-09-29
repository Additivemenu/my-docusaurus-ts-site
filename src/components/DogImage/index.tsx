import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./index.module.css";

interface DogImage {
  message: string;
  status: string;
}

const DogImageComponent: React.FC = () => {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDogImage = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<DogImage>(
        "https://dog.ceo/api/breeds/image/random",
      );
      setDogImage(response.data.message);
    } catch (err) {
      setError("An error occurred while fetching the dog image");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDogImage();
  }, [fetchDogImage]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Random Dog Image</h2>
      {loading && <div className={styles.loading}>Fetching a cute dog...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && dogImage && (
        <div className={styles.imageContainer}>
          <img src={dogImage} alt="Random dog" className={styles.dogImage} />
        </div>
      )}
      <button onClick={fetchDogImage} className={styles.button}>
        Fetch New Dog
      </button>
    </div>
  );
};

export default DogImageComponent;
