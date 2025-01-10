import { useState } from 'react';

export const useSearch = () => {

  const [results, setResults] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState('')

  const API_BASE_URL = process.env.NODE_ENV === "production"
  ? "https://stardew-valley-search.onrender.com"
  : "http://localhost:8000";

  const search = async (query: string) => {
    setError(null);

    try {

      const sanitizedQuery = query.trim()
      const response = await fetch(`${API_BASE_URL}/search?query=${sanitizedQuery}`, {
        method: "GET",
      });

      if (!response.ok) {

        throw new Error('Failed to fetch search results');
      }

      let data = await response.json()
      setResults(data.results);
      setModel(data.model)

      return data
    } catch (err) {

      setError((err instanceof Error ? `Error: ${err.message}` : 'An error occurred'));
    }

  };

  return { search, results, error, model };
};
