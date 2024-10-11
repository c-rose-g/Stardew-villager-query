import { useState } from 'react';

export const useSearch = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8000/search?query=${query}`);
      // console.log('this is the response >>>>>', response)
      if (!response.ok) {
        // console.log('this is response not ok', response)
        throw new Error('Failed to fetch search results');
      }
      let data = await response.json()
      setResults(data);
      console.log('DATA in search >>>', data)
      return data
    } catch (err) {

      setError((err instanceof Error ? `Error: ${err.message}` : 'An error occurred'));
    }
    finally {
      setLoading(false);
    }
  };

  return { search, results, loading, error };
};
