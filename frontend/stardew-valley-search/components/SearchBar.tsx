import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Button, Text, Animated, Easing, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { SearchVillagers } from './SearchVillagers';
import { SearchGifts } from './SearchGifts';
import { Ionicons } from '@expo/vector-icons';
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
  const handleClear = () => {
    setQuery('');
    // setSubmitted(false);
    // Keyboard.dismiss()
  }

  const handleSearch = async () => {
    const searchResults = await search(query);
    setSubmitted(true);

    if (!searchResults || searchResults.length === 0) {
      setSearchError('No results found.');
    } else {
      setSearchError(null);
      animate(Easing.out(Easing.ease)); // Trigger the animation when results are available
    }
    handleClear()
  };

  // console.log('this is model', model)
  const animatedStyles = {
    opacity,
    height,
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Search a giftable villager or item </Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={styles.inputRow}>
                <TextInput
                value={query}
                placeholder="Search..."
                style={styles.input}
                onChangeText={setQuery}
                clearButtonMode='while-editing'
                onSubmitEditing={() => onSearch(query)}
                // enablesReturnKeyAutomatically = {true}
                keyboardAppearance='dark'
                enterKeyHint='done'
                />
                {query !== '' && (
                  <TouchableOpacity onPress={handleClear} >
                    <Ionicons name="close-circle" size={30} color="#aaa" style={styles.clearContainer} />
                  </TouchableOpacity>
                )}
              </View>
                <Button title="Search" onPress={handleSearch} />
            </View>
          </TouchableWithoutFeedback>

        </View>
        {submitted && results.length > 0 && (
          <Animated.View style={[animatedStyles]}>
            <View style={styles.resultsContainer}>
              <ScrollView>

              <Text>
                { model === 'villagers' ? (<SearchVillagers results={results} />)
                : model === 'gifts' ? (<SearchGifts results={results}/>)
                : model === 'schedules' ? 'schedules results' : 'no'}
              </Text>
                </ScrollView>
            </View>
          </Animated.View>
        )}

        {submitted && !results.length && searchError && (
          <Animated.View style={[styles.resultsContainer, animatedStyles]}>
            <View>
              {/* <ScrollView> */}
                <Text style={{ color: 'red' }}>{searchError}</Text>
              {/* </ScrollView> */}
            </View>
          </Animated.View>
        )}
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    // width:375,
    // flex:1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
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
    paddingLeft:20,
    paddingRight:20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex:1,
    // justifyContent:'center',
  },
  searchContainer: {
    backgroundColor: '#ffffff',

    borderRadius: 5,
    paddingTop:10,
    paddingBottom:10,
  },
  resultsContainer: {
    marginTop: 10,
    backgroundColor:'#97c9e8',
    borderRadius: 5,
    alignSelf: 'stretch',
    height:500,
    // height:'auto',
    // overflow: 'visible', // Esures smooth rounded corners during animation
  },
  row:{
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  clearContainer:{
    position:'absolute',
    right:5,
    top:5,
  },
  clearButton:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'arial',
    // paddingLeft: 20,
    marginTop: 5,
  },
});
