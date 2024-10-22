import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView } from 'react-native';
import { CollapsibleResults } from '@/components/CollapsibleResults';
import { VillagerResults } from '../components/VillagerResults';

import { useSearch } from '@/hooks/useSearch';
interface SearchBarProps {
  onSearch: (query: string  | null ) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null); // State to track search errors

  // destructure the hook
  const { search, results, loading, error, model } = useSearch();

  const handleSearch = async() =>{
    const searchResults = await search(query);
    setSubmitted(true);

    if (!searchResults || searchResults.length === 0) {
      setSearchError('No results found.');
    } else {
      setSearchError(null);
    }
  }
  // console.log('this is model:', model)
  return (
    <>
    <View style={styles.container}>
      <TextInput
        value={query}
        placeholder="Search..."
        style={styles.input}
        onChangeText={setQuery}
        onSubmitEditing={() => onSearch(query)}

      />
      <Button title='Search' onPress={handleSearch} />
      </View>
      {loading && !results && <Text>Loading...</Text>}
      {submitted && !loading && results.length > 0 && (
        <Text>{model === 'villagers' ? (<VillagerResults results={results} />)
        : model === 'gifts' ? 'gifts'
        : model === 'schedules' ? 'schedules' : 'no'
        }</Text>

      )}
      {submitted && !loading && !results.length && error && <Text style={{ color: 'red' }}>{error}</Text>}
      {/* <CollapsibleResults results={results} /> */}

    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 50,
  },
  resultsContainer:{
    height:200,
  }
});

// export default Search
