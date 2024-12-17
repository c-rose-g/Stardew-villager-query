import { StyleSheet, Image, Animated, Text, View, SafeAreaView, ImageBackground, Dimensions, ScrollView, useColorScheme, Linking, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const About = () => {

  const { width, height } = Dimensions.get('window');

  // const aboutDeveloper = () =>{
  //   const openLink = (url) => {
  //     Linking.openURL(url).catch((err) =>
  //       console.error('Failed to open URL:', err)
  //     );
  // }

  const windowHeight = {
    height: height,
  }
  const windowWidth = {
    width:width,
  }
  const aboutContainer ={
    // height: height,
    // width: width,
    justifyContent: 'center' as 'center',
    marginTop: 10,
    borderRadius: 5,
    height: height / 2.16,
    // height: height / 5,
    backgroundColor:"#97cbed",
  };

  const box = {
    borderWidth:10,
    borderColor:'#f99304',
  };

  const animatedContainer = {
    height: height,
    width: width,
    justifyContent: 'center' as 'center',
  };

    const openLink = (url: string) =>{
      Linking.openURL(url).catch((err) => console.log('Failed to open URL:', err))
    }

  return (

      <SafeAreaView style={{backgroundColor:'#000'}}>
      <ImageBackground style={windowHeight} source={require('@/assets/images/index-bg.png')}>
      <View style={{ flexDirection:'column', alignItems:'center', }}>

      <Image source={require('../../assets/images/stardew_valley_search.png')} style={{width:300, height:300, borderRadius:10, marginTop:10,}} />
      <View style={[box, aboutContainer,{}]}>
          <ScrollView style={{}}>
          <View key={`row-1`} style={{ padding:3,}}>

            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              {/* <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center', fontWeight:'bold', marginLeft:10, marginBottom:5,}]}>Welcome to Unofficial Stardew Valley Search!</Text> */}
              </View>
              <Text style={{marginLeft:2, marginBottom:5, paddingLeft:10, paddingRight:10, fontSize:18, fontWeight:'bold', }}>Here's a quick guide to help you make the most out of our unofficial Stardew Valley Search:</Text>
            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center', fontWeight:'bold', marginLeft:10, marginBottom:5,}]}>Search Bar Basics</Text>
              </View>
            <Text key={`row-1-info-bold-not-bold`} style={[styles.fontFamilyArial, {marginLeft:10, marginBottom:5, marginTop:5, fontSize:16,}]}>
            <Text style={[styles.fontFamilyArial,{fontWeight:'bold'}]}>Type Keywords: </Text>Start typing in the search bar to find exactly what you're looking for.
            </Text>
            <Text style={[styles.fontFamilyArial, {paddingLeft:15, marginBottom:5, fontSize:16,}]}>{'\u2022'} Example: Search for "Emily" to find information <View style={{paddingLeft:10, }}>
              <Text style={{fontSize:16}}>about Emily, or type "Amethyst" to explore gift preferences.</Text></View></Text>
            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center', fontWeight:'bold', marginLeft:10, marginBottom:5,}]}>What You Can Search For</Text>
              </View>
            <Text style={[styles.fontFamilyArial, {marginLeft:10 , marginBottom:5, fontSize:16, marginTop:5,}]}><Text style={{fontWeight:'bold', }}>Villagers: </Text>Learn about their favorite gifts and
            <View style={{paddingLeft:10, }}>
              <Text style={{fontSize:16}}>facts.
              </Text>
            </View>
            </Text>
            <Text style={[styles.fontFamilyArial, {marginLeft:10, marginBottom:5, fontSize:16,}]}><Text style={{fontWeight:'bold'}}>Gifts: </Text><Text>Discover which villagers react to a gift.</Text></Text>

            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center', fontWeight:'bold', marginLeft:10, marginBottom:5,}]}>Results Layout</Text>
              </View>
            <Text style={[styles.fontFamilyArial, {marginLeft:10, marginBottom:5, fontSize:16, marginTop:5,}]}><Text style={{fontWeight:'bold'}}>Villagers: </Text>Displays their name, address, and favorite gifts.</Text>
            <Text style={[styles.fontFamilyArial, {marginLeft:10, marginBottom:5, fontSize:16, }]}><Text style={{fontWeight:'bold'}}>Gifts: </Text>Shows a list of villager reactions and the season the gifts are found.</Text>

            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center', }]}>
              <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center', fontWeight:'bold', marginLeft:10, marginBottom:5,}]}>Still Need Help?</Text>
              </View>
            <Text style={[styles.fontFamilyArial,{paddingLeft:10, marginBottom:5, fontSize:16, marginTop:5, }]}>If you have any trouble using the search engine or can’t find what you’re looking for, feel free to contact us through the app's support page.</Text>
          </View>

          <View key={`row-2`} style={{ padding:3, }}>

            <Text key={`row-2-info-text`} style={[styles.fontFamilyArial, {marginLeft:10, marginBottom:5, marginTop:5, fontSize:16, }]}>The app is an independent tool developed to enhance players' experience. It is not affiliated with ConcernedApe.</Text>
          </View>

          <View key={`row-3`} style={{ padding:3, }}>

            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center', fontWeight:'bold', marginLeft:10, marginBottom:5,}]}>About the developer</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'center',}}>
            <Image source={require('../../assets/images/stardew-villager-dev-character.png')} style={{width:200, height:200, borderRadius:10, marginTop:10,}}/>
              </View>
              <View style={{marginTop:10, }}>
                <Text key={`row-3-info-text`} style={[styles.fontFamilyArial, {marginLeft:2, marginBottom:5, paddingLeft:10, paddingRight:10, fontSize:16,}]}>Hi! I'm Cindy, a passionate software engineer and developer. I built this app to make exploring and searching Stardew Valley game data fast, seamless, and fun.</Text>
                <Text style={[styles.fontFamilyArial, {marginLeft:2, marginBottom:5, paddingLeft:10, paddingRight:10, fontSize:16,}]}>Feel free to explore more of my projects and connect with me here:</Text>
                <View style={{marginTop:4,}}>
                <Text style={[styles.fontFamilyArial, {marginLeft:2, paddingLeft:10, fontSize:16,}]}>{'\u2022'} Visit My<TouchableOpacity style={{}} onPress={() => openLink('https://c-rose-g.github.io/')}><Text style={[styles.fontFamilyArial, {marginLeft:2, fontSize:16, fontWeight:'bold', marginBottom:-4}]}>Website</Text>
                  </TouchableOpacity>
                </Text>
                </View>

                <Text style={[styles.fontFamilyArial, {marginLeft:2, marginBottom:5, paddingLeft:10, paddingRight:10, fontSize:16,}]}>{'\u2022'} Check Out My<TouchableOpacity  onPress={() => openLink('https://github.com/c-rose-g')}><Text style={[styles.fontFamilyArial, {marginLeft:2, fontSize:16, fontWeight:'bold', marginBottom:-4}]}>GitHub</Text></TouchableOpacity>


                </Text>
                <Text style={[styles.fontFamilyArial, {marginLeft:2, marginBottom:5, paddingLeft:10, paddingRight:10, fontSize:16,}]}>Thank you for checking out the app! 🚀</Text>
              </View>

          </View>

          </ScrollView>
        </View>
      </View>
      </ImageBackground>
      </SafeAreaView>

  )
}

export default About;

const styles = StyleSheet.create({
  container:{
    // backgroundColor:"#97cbed",
    // backgroundColor:"#12195b", //=====> super dark blue
    flex:1,
  },
  titleTextBold:{
    fontSize:20,
    fontWeight:'bold',
  },
  greenContainer:{
    backgroundColor:'#14a006',
    justifyContent:'center',
    width:100,
  },
  fontFamilyArial:{
    fontFamily: "Arial",
  },
  subContainer:{
    // borderWidth:.5,
    margin:2,
    // borderColor:'#95c1da',
    borderColor:'#12185b',
    shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowRadius: .5,
  },
  link: {
    // fontSize: 16,
    // color: '#1E90FF', // Link color
    // marginBottom: 10,
    // textDecorationLine: 'underline',
  },
  title:{
    fontSize:21,
    fontFamily: "Arial",
    fontWeight: 'bold',
    marginTop:2,
    marginBottom:2,
  },
  textShadow:{
    shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    color:'#fff'
  },
})
