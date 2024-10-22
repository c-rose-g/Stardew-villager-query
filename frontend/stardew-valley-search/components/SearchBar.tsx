import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Button, Text, Animated, Easing, ScrollView } from 'react-native';
import { VillagerResults } from './SearchVillagers';
import type { EasingFunction } from 'react-native';

import { useSearch } from '@/hooks/useSearch';

type SearchBarProps = {
  onSearch: (query: string | null) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const opacity = useState(new Animated.Value(0))[0];
  const height = useState(new Animated.Value(0))[0];
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const animate = (easing: EasingFunction) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      easing,
      useNativeDriver: false,
    }).start();

    Animated.timing(height, {
      toValue: 200, // Adjust based on desired final height of the results container
      duration: 400,
      easing,
      useNativeDriver: false, // height animation cannot use the native driver
    }).start();
  };

  const { search, results, error, model } = useSearch();

  const handleSearch = async () => {
    const searchResults = await search(query);
    setSubmitted(true);

    if (!searchResults || searchResults.length === 0) {
      setSearchError('No results found.');
    } else {
      setSearchError(null);
      animate(Easing.out(Easing.ease)); // Trigger the animation when results are available
    }
  };

  console.log('this is model', model)
  const animatedStyles = {
    opacity,
    height,
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TextInput
          value={query}
          placeholder="Search..."
          style={styles.input}
          onChangeText={setQuery}
          onSubmitEditing={() => onSearch(query)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      {submitted && results.length > 0 && (
        <Animated.View style={[styles.resultsContainer, animatedStyles]}>
          <ScrollView>
          <Text>
            { model === 'villagers' ? (<VillagerResults results={results} />)
            : model === 'gifts' ? 'gifts results'
            : model === 'schedules' ? 'schedules results' : 'no'}
          </Text>
          </ScrollView>
        </Animated.View>
      )}
      {submitted && !results.length && searchError && (
        <Text style={{ color: 'red' }}>{searchError}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  resultsContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden', // Ensures smooth rounded corners during animation
  },
});
