import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, RefreshControl, SafeAreaView, View, TextInput, StyleSheet, Button, Text, Animated, Easing, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SearchVillagers } from './SearchVillagers';
import { SearchGifts } from './SearchGifts';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import type { EasingFunction } from 'react-native';
import { useSearch } from '../hooks/useSearch';


type SearchBarProps = {
  onSearch: (query: string | null) => void;
  style?: object;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { width, height } = Dimensions.get('window');
  const opacity = useState(new Animated.Value(0))[0];
  const animatedHeight = useState(new Animated.Value(0))[0];
  const searchBarAnim = useState(new Animated.Value(0))[0];
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme === 'dark' ? Colors.dark : Colors.light);
  const isDarkMode = theme === Colors.dark;
  const backgroundColor = isDarkMode ? Colors.dark.background : Colors.light.background;
  const textColor = isDarkMode ? Colors.dark.text : Colors.light.text;
  const titleColor = isDarkMode ? Colors.dark.titleColor : Colors.light.titleColor;
  const inputBorder = isDarkMode ? Colors.dark.inputBorderColor : Colors.light.inputBorderColor;
  const inputText = isDarkMode ? Colors.dark.inputTextColor : Colors.light.inputTextColor;
  const linkColor = isDarkMode ? Colors.dark.link : Colors.light.link;

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

    Animated.timing(animatedHeight, {
      toValue: 450, // Adjust based on desired final animatedHeight of the results container
      duration: 400,
      easing,
      useNativeDriver: false, // animatedHeight animation cannot use the native driver
    }).start();
  };


  const { search, results, error, model } = useSearch();
  const handleClear = () => {
    setQuery('');
    // setSubmitted(false);
    // Keyboard.dismiss()
  };

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

  const animatedStyles = {
    opacity,
    animatedHeight,
  };

  const box = {
    borderWidth:10,
    borderColor:'#f99304',
    height: height / 1.71,
  };
  const resultsContainer = {
    marginTop: 10,
    borderRadius: 5,
    height:height / 2,
    backgroundColor:"#97cbed",
  };

  const searchContainer = {
    backgroundColor: backgroundColor,
    borderRadius: 5,
    paddingTop:10,
    paddingBottom:10,
    margin:10,
    width: width,
  };

const input = {
  borderColor: inputBorder,
  height: 40,
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 10,
  flex:1,
};

const textColorStyle ={
  color: textColor,
};

const titleColorStyle = {
  color: titleColor,
};

  return (
    <SafeAreaView>
      <View style={[{alignSelf:'center'}]}>

        <View style={[searchContainer,]}>

          <Text style={[styles.title,titleColorStyle]}>Search a giftable villager or item </Text>
          <View >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{opacity:.5}}>
              <View style={[styles.inputRow]}>
                <TextInput
                value={query}
                placeholder="Search..."
                style={[input, textColorStyle]}
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
                <View>
                  <Button title="Search" onPress={handleSearch} color={linkColor} />
                </View>
            </View>
          </TouchableWithoutFeedback>
          </View>
        </View>
        {submitted && results.length > 0 && (
          <Animated.View style={[animatedStyles]}>
            <View style={[resultsContainer, box]}>
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
        </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    // shadowColor: '#12185b',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
    // width: 400,
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
    color:'#ccc',
    // backgroundColor:'#4d5156',
    borderColor: '#ccc',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex:1,
    // justifyContent:'center',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:10,
    borderColor:'#fff',
  },
  resultsContainer: {
    marginTop: 10,
    borderRadius: 5,
    height:520,

  },
  box:{
    borderWidth:10,
    borderColor:'#f99304',
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
