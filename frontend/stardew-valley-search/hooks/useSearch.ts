import { useState } from 'react';

export const useSearch = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState('')

  const search = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8000/search?query=${query}`);

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
    finally {
      setLoading(false);
    }
  };

  return { search, results, loading, error, model };
};
