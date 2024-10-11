import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { CollapsibleResults } from '@/components/CollapsibleResults';
import { useSearch } from '@/hooks/useSearch';
interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // destructure the hook
  const { search, results, loading, error } = useSearch();

  const handleSearch = async() =>{
    await search(query);
    setSubmitted(true);

  }
  console.log('RESULTS >>', results)
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        placeholder="Search..."
        style={styles.input}
        onChangeText={setQuery}
        onSubmitEditing={() => onSearch(query)}

      />
      <Button title='Search' onPress={handleSearch} />
      {loading && !results && <Text>Loading...</Text>}
      {submitted && !loading && results.length > 0 && (
        <View>
          <Text>Results:</Text>
    
            {results.map((result: { name: string, schedule: object, buildingId: number, marriage: boolean, sex: string }, index) => (
              result.name ? ( // Check if name is defined before rendering
                <Text key={index}>
                  {`${result.name} is a villager.`}{"\n"}
                  {`${result.sex === 'Female' ? 'She' : 'He'} lives in ${result.buildingId}.`}{"\n"}
                  {`They ${result.marriage ? 'are open' : 'are not open'} to marriage.`}
                  </Text>
                  ) : null // Avoid rendering when name is undefined
                  ))}
                  </View>
        )}
      {submitted && !loading && !results.length && error && <Text style={{ color: 'red' }}>{error}</Text>}
      {/* <CollapsibleResults results={results} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
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
    paddingHorizontal: 10,
  },
});

// export default Search
