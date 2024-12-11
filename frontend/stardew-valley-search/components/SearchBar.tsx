import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Button, Text, Animated, Easing, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { SearchVillagers } from './SearchVillagers';
import { SearchGifts } from './SearchGifts';
import type { EasingFunction } from 'react-native';

import { useSearch } from '../hooks/useSearch';

type SearchBarProps = {
  onSearch: (query: string | null) => void;
  style?: object;
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
    <SafeAreaView style={[styles.container]}>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Search a giftable villager or item </Text>
          <View style={styles.inputRow}>
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
      </View>
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
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    width:375,
  },
  title:{
    fontSize:20,
    marginBottom:10,
    marginTop:10,
    fontWeight:'600',
    textAlign: 'center',
  },
  inputRow:{
    flexDirection: 'row',

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    // flex:1,
    width:360
  },
  searchContainer: {
    backgroundColor: '#ffffff',

    borderRadius: 5,
    padding: 10,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  resultsContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignSelf: 'stretch',

    // overflow: 'visible', // Esures smooth rounded corners during animation
  },
  row:{
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  clearContainer:{
    // left:330,
    // top:11,
    // width:19,
    // height:40,
    // marginTop:-41,
    // borderWidth:1,
    // borderColor:'red',
    right:20,
    justifyContent:'center',
  },
  clearButton:{
    color:'#aaa',
    // textAlign:'center',
    fontWeight:'500'
  },
});
