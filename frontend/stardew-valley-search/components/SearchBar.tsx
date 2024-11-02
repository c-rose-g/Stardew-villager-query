import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Button, Text, Animated, Easing, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SearchVillagers } from './SearchVillagers';
import { SearchGifts } from './SearchGifts';
import type { EasingFunction } from 'react-native';

import { useSearch } from '@/hooks/useSearch';

type SearchBarProps = {
  onSearch: (query: string | null) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {

  const opacity = useState(new Animated.Value(0))[0];
  const height = useState(new Animated.Value(0))[0];
  const searchBarAnim = useState(new Animated.Value(0))[0];
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect( () => {

    const startSearchBarAnimate = () =>{
      Animated.timing( searchBarAnim,{
        toValue:1,
        duration:100,
        delay:10,
        useNativeDriver:true,
      }).start();
    };

    startSearchBarAnimate();
  },[searchBarAnim]);

  const animate = (easing: EasingFunction) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      easing,
      useNativeDriver: false,
    }).start();

    Animated.timing(height, {
      toValue: 450, // Adjust based on desired final height of the results container
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
  const handleClear = () => {
    setQuery('');
    setSubmitted(false);
  }
  // console.log('this is model', model)
  const animatedStyles = {
    opacity,
    height,
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      {/* <Animated.View > */}

        <View style={styles.searchContainer}>
          <Text style={styles.title}>Type in a villager or giftable item in the search bar </Text>
          <TextInput
            value={query}
            placeholder="Search..."
            style={styles.input}
            onChangeText={setQuery}
            onSubmitEditing={() => onSearch(query)}
            />
            {query !== '' && (
        <TouchableOpacity onPress={handleClear} style={styles.clearContainer}>
          <Text style={styles.clearButton}>X</Text>
        </TouchableOpacity>
      )}
          <Button title="Search" onPress={handleSearch} />
        </View>
        {submitted && results.length > 0 && (
          <Animated.View style={[styles.resultsContainer, animatedStyles]}>
            <View>
              <Text>
                { model === 'villagers' ? (<SearchVillagers results={results} />)
                : model === 'gifts' ? (<SearchGifts results={results}/>)
                : model === 'schedules' ? 'schedules results' : 'no'}
              </Text>
            </View>
          </Animated.View>
        )}
        {submitted && !results.length && searchError && (
          <Text style={{ color: 'red' }}>{searchError}</Text>
        )}

      {/* </Animated.View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewContainer:{
    // borderWidth:1,
    // borderColor:'yellow',
  },
  title:{
    fontSize:15,
    marginBottom:4,
    fontWeight:'300',
    textAlign: 'center',

  },
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
    // shadowColor: '#fff',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
  },
  resultsContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignSelf: 'stretch',
    // overflow: 'visible', // Ensures smooth rounded corners during animation
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearContainer:{
    // borderWidth:1,
    // borderColor:'green',
    // bottom:5,
    left:330,
    top:11,
    // left:6,
    width:19,
    height:40,
    marginTop:-41,

  },
  clearButton:{
    textAlign:'center',

    fontWeight:'200'
  },
});
