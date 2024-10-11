import { useState } from 'react';

export const useSearch = () => {
  const [results, setResults] = useState<string[]>([]);

  const search = (query: string) => {
    // Simulate a search operation
    const simulatedResults = ['Result 1', 'Result 2', 'Result 3'];
    setResults(simulatedResults);
  };

  return { results, search };
};
