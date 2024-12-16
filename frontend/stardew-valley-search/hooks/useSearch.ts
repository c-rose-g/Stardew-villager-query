import { useState } from 'react';

export const useSearch = () => {
  const [results, setResults] = useState<any[]>([])

  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState('')

  const search = async (query: string) => {
    setError(null);

    try {
      // remove whitespace around the query
      const sanitizedQuery = query.trim()
      // find mobile in .env
      const response = await fetch(`http://localhost:8000/search?query=${sanitizedQuery}`);

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
