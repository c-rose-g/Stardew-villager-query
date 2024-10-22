import { useState } from 'react';

export const useSearch = () => {
  const [results, setResults] = useState([])

  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState('')

  const search = async (query: string) => {
    setError(null);

    try {
      const response = await fetch(`http://localhost:8000/search?query=${query}`);

      if (!response.ok) {

        throw new Error('Failed to fetch search results');
      }

      let data = await response.json()
      setResults(data.results);
      setModel(data.model)
      console.log('this is data in useSearch', data)
      return data
    } catch (err) {

      setError((err instanceof Error ? `Error: ${err.message}` : 'An error occurred'));
    }

  };

  return { search, results, error, model };
};
