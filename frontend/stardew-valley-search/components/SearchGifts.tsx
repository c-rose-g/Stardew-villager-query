import React, {useState} from "react";
import { Dimensions, SafeAreaView, View, StyleSheet, Text, Image, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSearch } from "@/hooks/useSearch";
import DropDownPicker from 'react-native-dropdown-picker';
import { SearchVillagers } from "./SearchVillagers";


type VillagerGift = {
  villagerId: number;
  preferenceId: number;
  Villager: { name: string };
  Preference: { name: string | null };
};

type GiftSeason = {
  giftId: number | null;
  seasonId: number | null;
  Season: { name: string | null };
};

type groupedPreferences = {
  [preference: string]: string[];
};

type SearchResult = {
  id: number;
  name: string;
  VillagerGifts: VillagerGift[];
  GiftSeasons: GiftSeason[];
  groupedPreferences: groupedPreferences;
};

type ComponentProps = { results : SearchResult[];

};
export const SearchGifts = ({results}:ComponentProps) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  // styles using window width and height
  const container = {
    width: width,
    backgroundColor:"#97cbed",
  };

  const greenContainer = {
    backgroundColor:'#14a006',
    width:width /3.9,
    height: height / 6.7,

  };
  const seasonInfoContainer ={
    marginTop: 2,
    marginRight:-10,
    width:width / 1.5 ,
    backgroundColor:'#d4e9f5',
  };
  const villagerInfoContainer = {
    marginTop: 2,
    marginRight:-10,
    width:width / 1.5,
    backgroundColor:'#d4e9f5'
  }
  const box = {
    width:375,
  };

  const resultsContainer = {
    paddingTop:10,
    borderBottomWidth:5,
    borderColor:'#ccc',
    width: 375,
  };
  const villagerInfoWidth = {
    width: width / 7.7,
  }

  const groupByFour = (villagers: string[]): string[][] =>

    villagers.reduce((acc: string[][], villager, idx) => {
        if (idx % 4 === 0) acc.push([]);
        acc[acc.length - 1].push(villager);
        return acc;
    },[]);

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={[styles.title, styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center', height: 30, }]}>Gift Information</Text>
        {results.map((result, index) => {

          return  (
          <View key={result.id} style={{marginTop:20,}}>
            <View key={`result-facts-container-${index}`} style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text key={`result-facts-title-text-${index}`}  style={[styles.title, styles.textShadow, {color:'#fff', textAlign:'center'}]}>Facts</Text>
              </View>
              <View key={`result-gift-name-row-${index}-container`} style={{flexDirection:'row',}}>
                <View key={`result-gift-name-${index}`}  style={[styles.subContainer, greenContainer, { justifyContent:'center'}]}>
                  <Text key={`result-gift-name-text-title-${index}`} style={[styles.subTitle, styles.textShadow, {textAlign:'center', justifyContent:'center', marginTop:2, marginBottom:2}]}>Name</Text>
                </View>
                  <View key={`result-gift-name-text-info${index}`} style={[seasonInfoContainer,{flexDirection:'row', paddingLeft:5, }]}>
                    <View key={`result-gift-name-align-self-${index}`} style={{alignSelf:'center', }}>
                    <Text key={`result-gift-name-${index}`} style={[ {width:200, fontSize:17} ]}>{`${result.name}`}</Text>
                    </View>
                  </View>
              </View>
              <View key={`result-seasons-name-row-${index}-container`} style={{flexDirection:'row' }}>
                <View key={`result-seasons-names-${index}-column`} style={[styles.subContainer, greenContainer, { justifyContent:'center' }]}>
                  <Text key={`result-seasons-text-${index}`} style={[styles.subTitle, styles.textShadow, {textAlign:'center', justifyContent:'center', marginTop:2, marginBottom:2}]}>Seasons</Text>
                </View>
                <View key={`result-season-info-row-${index}-column`} style={[seasonInfoContainer, {flexDirection:'row', paddingLeft:5}]}>
                    {result.GiftSeasons.length ?
                    ( <Text key={`result-season-info-text-${index}`} style={{ alignSelf: 'center', fontSize:16, }}>
                      {result.GiftSeasons
                        .map((season: any) => (season.Season && season.Season.name ? season.Season.name : null))
                        .filter(Boolean)
                        .join(', ')}
                    </Text>
                    ):(
                          <View key={`no-result-season-info-${index}`} style={{flexDirection:'row'}}>
                            <View key={`no-result-season-info-align-self-${index}`} style={{alignSelf:'center',}}>

                            <Text key={`no-result-season-info-text-${index}`} style={[{fontSize:16 }]}>No Seasons associated with this gift</Text>
                            </View>
                          </View>
                        ) }
                        </View>
              </View>

              <View key={`result-reactions-row-container`} style={[{ flexDirection:'row'}]}>
                <View key={`result-reactions-title-column`} style={[styles.subContainer, greenContainer, {height:'auto', justifyContent:'center'}]}>
                  <Text key={`result-reactions-title-column-text`} style={[styles.subTitle, styles.textShadow, {textAlign:'center',}]}>Reactions</Text>
                </View>
                <View key={`result-reactions-info-column`} style={[villagerInfoContainer, {marginTop:2, }]}>

                  {result.groupedPreferences && Object.keys(result.groupedPreferences).length === 0 ? (
                    <View key={`no-result-reactions-info`} style={{ flexDirection:'row', paddingLeft:5, alignContent:'center', height:135}} >
                    <View style={{alignSelf:'center', }}>
                      <Text key={`no-result-reactions-info-text`} style={{}}>No villagers associated with this gift</Text>
                      </View>
                      </View>
                  ):(

                    result.groupedPreferences && Object.entries(result.groupedPreferences).sort(([a], [b]) => {
                      const order = ["Loves", "Likes", "Neutrals", "Dislikes", "Hates"];
                      return order.indexOf(a) - order.indexOf(b);
                    }).map(([preference, villagers]) =>{
                      const rows = groupByFour(villagers);
                      return(
                        <View key={`result-reactions-info-${preference}`}>
                        <Text key={`result-reactions-title-text-${villagers}-${preference}-`}style={[styles.preferenceTitle, {margin:2, paddingTop:5, paddingLeft:5}]}>{preference}</Text>
                        {rows.map((villagerGroup, idx) =>(

                          <Text key={`result-reactions-villager-name-text-${idx}-`} style={[styles.preferenceName,{margin:10, paddingLeft:10}]}>{'\u2022'} {villagerGroup.join(", ")}</Text>

                        ))}
                      </View>
                    )
                  })


                  )}

                </View>
              </View>
            </View>
            )


            }

            )}
      </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    // backgroundColor:"#97cbed",
    // alignItems:'center',
    // margin:20,
    // flex:1,
  },
  subContainer:{
    // borderWidth:1,
    marginTop:3,
    marginRight:2,
    marginLeft:2,
    // borderColor:'#95c1da',
    borderColor:'#12185b',
    shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowRadius: .5,

  },
  // greenContainer:{
  //   backgroundColor:'#14a006',
  //   justifyContent:'center',
  //   width:100,
  // },
  infoContainer:{
    // backgroundColor:'#d4e9f5',
    // width:247,
    borderWidth:1,
    borderColor:'red',
    paddingBottom:5,
  },
  // box:{
    // justifyContent:'center',
  //   width:375,
  // },
  title:{
    fontSize:21,
    fontFamily: "Arial",
    fontWeight: 'bold',
    // marginTop:2,
    marginBottom:2,
    // alignContent:'center'
  },
  subTitle:{
    fontFamily: "Arial",
    fontWeight: 'bold',
    marginBottom:2,
    fontSize:19,
  },
  preferenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 10,
    fontFamily: "Arial",
  },
  preferenceName:{
    fontSize:16,
    fontFamily: "Arial",
  },
  row:{
    flexDirection: 'row',
  },
  text: {
    margin: 2,
    paddingLeft:20,
  },
  villagerText:{
    fontSize:12,
  },
  textShadow:{
    shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    color:'#fff'
  },
  upperTextShadow:{ shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    color:'#fff'
  },
  selectContainer:{
    minWidth: 128,
    // marginRight:50,
    // paddingRight:5,
    // width:'auto',
    // alignContent:'space-between'
  },
  selectText:{
    textAlign:'center',
    fontSize:10,
  },
  resultsContainer:{
    paddingTop:10,
    // borderTopWidth:2,
    borderBottomWidth:5,
    borderColor:'#ccc',
    width: 375,
  },
  noVillager:{
    paddingTop:10,
    borderTopWidth:1,
    width:375,
  },
  // title:{
  //   fontWeight:"bold",
  //   fontSize:25,
  //   textAlign: 'center',
  //   paddingTop:10,
  // },
  resultsSubHeading:{
    fontSize:20,
    textAlign: 'center',
    // borderTopWidth:1,
  },
  resultsText:{
    fontSize:20,
    textAlign: 'center',
    alignContent:"space-between",
  },
  // row:{
  //   flexDirection: 'row',
  //   justifyContent:'space-between',
  //   marginVertical:10,
  //   height:30,
  //   width: 375,
  // },
  column: {
    flex: 1,
    alignItems: "center",
    // borderWidth:1,
  },
  villagerName: {
    fontWeight: "300",
    // width:119,
  },
})
