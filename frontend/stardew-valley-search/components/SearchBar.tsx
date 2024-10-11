import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView } from 'react-native';
import { CollapsibleResults } from '@/components/CollapsibleResults';
import { useSearch } from '@/hooks/useSearch';
interface SearchBarProps {
  onSearch: (query: string  | null ) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null); // State to track search errors
  // destructure the hook
  const { search, results, loading, error } = useSearch();

  const handleSearch = async() =>{
    const searchResults = await search(query);
    setSubmitted(true);

    if (!searchResults || searchResults.length === 0) {
      setSearchError('No results found.');
    } else {
      setSearchError(null);
    }
  }
  // console.log('RESULTS >>', results)
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
      <ScrollView style={styles.resultsContainer}>

        {results.map((result: { name: string, Schedule: Array<{seasonId:number, description:string, startLocationId: number, endLocationId:number, startBuildingId:number, endBuildingId:number, time:number, weekday:string | null, weather:string | null, isFestival:boolean}>, buildingId: number, houseId:number, marriage: boolean, sex: string, Gifts: Array<{ name: string, Villager_Gift: { preferenceId: number } }> | null }, index) => (
          result.name ? (
          <View key={index}>
            <Text>
              {`${result.name} is a villager.`}{"\n"}
              {`${result.sex === 'Female' ? 'She' : 'He'} lives in ${result.buildingId? result.buildingId: result.houseId}.`}{"\n"}
              {`They ${result.marriage ? 'are open' : 'are not open'} to marriage.`}
            </Text>
            <Text>{`Want to give ${result.name} a gift?`}</Text>
            {result.Gifts ? (
              result.Gifts.map((gift, giftIndex) => (
                <Text key={giftIndex}>
                  {gift.Villager_Gift.preferenceId === 1 && `${gift.name} (Loved)`}
                  {gift.Villager_Gift.preferenceId === 2 && `${gift.name} (Liked)`}
                  {gift.Villager_Gift.preferenceId === 3 && `${gift.name} (Neutral)`}
                  {gift.Villager_Gift.preferenceId === 4 && `${gift.name} (Disliked)`}
                  {gift.Villager_Gift.preferenceId === 5 && `${gift.name} (Hated)`}
                </Text>
              ))
            ) : (
            <Text>{result.name} has no gifts they want.</Text>
          )}
        </View>
      ) : null
    ))}
      </ScrollView>
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
