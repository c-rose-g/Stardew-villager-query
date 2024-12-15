import React, {useState} from "react";
import { Dimensions, SafeAreaView, View, StyleSheet, Text, Image, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSearch } from "@/hooks/useSearch";
import DropDownPicker from 'react-native-dropdown-picker';
import { SearchVillagers } from "./SearchVillagers";

type ComponentProps = { results : Array <any>}

// TODO: add interface outside
interface VillagerGift {
  villagerId: number;
  preferenceId: number;
  Villager: { name: string };
  Preference: { name: string | null };
}

interface GiftSeason {
  giftId: number;
  Season: { name: string };
}
interface groupPreferences{
  preference: Array<{ name: string }>
}
interface Result {
  id: number;
  name: string;
  VillagerGifts: VillagerGift[];
  GiftSeasons: GiftSeason[];
  groupPreferences: groupPreferences
}

export const SearchGifts = ({results}:ComponentProps) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const container = {
    width: width,
    backgroundColor:"#97cbed",
    // padding:20,
  };

  const greenContainer = {
    backgroundColor:'#14a006',
    width:width /3.9,
    height: height / 6.7,
  };

  const infoContainer = {
    // backgroundColor:'#d4e9f5',
    // width: width / 4,
    // paddingLeft:3,
    // paddingBottom:5,
    // paddingRight: 30,
  };
  const seasonInfoContainer ={
    marginTop: 2,
    marginRight:-10,
    width:width / 1.5 , //------------> put this back
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

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={[styles.title, styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center', height: 30, }]}>Gift Information</Text>
        {results.map((result:Result, index) => {

          return result.name ? (
          <View key={result.id} style={{marginTop:20,}}>
            {/* <Text key={`result-name-${result.id}`} style={[styles.title, styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center', height: 30, }]}>{`${result.name}`}</Text> */}
            {/* <Image key={`result-image-${result.id}`} style={{}} resizeMode="contain" /> */}
            <View key={`result-facts-${index}`} style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text key={`result-facts-text-${index}`}  style={[styles.title, styles.textShadow, {color:'#fff', textAlign:'center'}]}>Facts</Text>
              </View>
              <View key={`result-gift-name-row-${index}`} style={{flexDirection:'row',}}>
                <View key={`result-gift-name-${index}`}  style={[styles.subContainer, greenContainer, { justifyContent:'center'}]}>
                  <Text key={`result-gift-name-text-title-${index}`} style={[styles.title, styles.textShadow, {textAlign:'center', justifyContent:'center', marginTop:2, marginBottom:2}]}>Name</Text>
                </View>
                  <View key={`result-gift-name-text-info${index}`} style={[seasonInfoContainer,{flexDirection:'row', paddingLeft:5, }]}>
                    <View key={`result-gift-name-align-self-${index}`} style={{alignSelf:'center', }}>
                    <Text key={`result-gift-name-${index}`} style={[ {width:200} ]}>{`${result.name}`}</Text>
                    </View>
                  </View>
              </View>
              <View key={`result-seasons-name-row-${index}`} style={{flexDirection:'row' }}>
                <View key={`result-seasons-green-container${index}`} style={[styles.subContainer, greenContainer, { justifyContent:'center' }]}>
                  <Text key={`result-seasons-text-${index}`} style={[styles.title, styles.textShadow, {textAlign:'center', justifyContent:'center', marginTop:2, marginBottom:2}]}>Seasons</Text>
                </View>
                <View key={`result-season-info-row-${index}`} style={[seasonInfoContainer, {flexDirection:'row', paddingLeft:5}]}>
                    {result.GiftSeasons.length ?
                    (result.GiftSeasons.map((season: any) => {
                        const seasonName = season.Season && season.Season.name ? season.Season.name : null ;

                        return (
                        <View key={`${season.id}`} style={{alignSelf:'center'}}>
                            <Text key={season.id} style={[ {} ]}>
                              {seasonName}
                            </Text>
                            </View>
                        )
                      }))
                      .reduce((acc: any[], season: any, idx: number) => {
                        if (idx % 3 === 0) {
                          acc.push([]);
                        }
                        acc[acc.length - 1].push(season);
                        return acc;
                      }, [])
                        :
                        (
                          <View style={{flexDirection:'row', paddingLeft:5}}>
                            <View style={{alignSelf:'center'}}>

                            <Text style={[ {}]}>No Seasons associated with this gift</Text>
                            </View>
                          </View>
                        ) }
                        </View>
              </View>

              <View style={[{ flexDirection:'row'}]}>
                <View style={[styles.subContainer, greenContainer, {height:'auto'}]}>
                  <Text style={[styles.title, styles.textShadow, {textAlign:'center',}]}>Villagers</Text>
                </View>
                <View style={[villagerInfoContainer, {marginTop:2, paddingLeft:5, }]}>
                  <View style={{}}>
                  {
                    result.VillagerGifts.length ? (
                      Object.entries(

                        result.VillagerGifts.reduce((acc: any, villager: any) => {
                          const preference = villager.Preference?.name || "Unknown";
                          const villagerName = villager.Villager?.name || "Unknown";

                          // console.log('this is a villager array?? ======>,', villager)
                          if (!acc[preference]) {
                            acc[preference] = [[]];
                          }

                          if (acc[preference][acc[preference].length - 1].length === 3) {
                            acc[preference].push([]);
                          }

                          acc[preference][acc[preference].length - 1].push(villagerName);
                          return acc;

                        }, {})
                      )
                      .sort(([a], [b]) => {
                        const order = ["Loves", "Likes", "Neutrals", "Dislikes", "Hates"];
                        return order.indexOf(a) - order.indexOf(b);
                      })
                      .map(([preference, villagers]) => {

                        const formattedVillagers = (villagers as string[][]).map(innerArray =>
                          innerArray.map((villager, index) =>
                            index < innerArray.length ? villager + " " : villager
                          )
                        );

                        return (
                          <View key={preference} style={{}}>
                            <Text key={`preference-container-${preference}`} style={[styles.preference,{}]}>{preference}</Text>
                            <View style={{ flexDirection:'row'}}>
                              {formattedVillagers.flat().map((villager: string, idx: number) => (
                                <View style={[villagerInfoWidth,{ width:'auto',}]} key={`${preference}-${idx}`}>
                                  <Text style={[ styles.villagerText, {marginTop:5, textAlign:'center', }]}>{villager}</Text>
                                </View>
                              ))}
                            </View>
                          </View>
                        );
                      })
                    ) : (

                      <View style={{ flexDirection:'row', paddingLeft:5, alignContent:'center', height:135}} >
                        <View style={{alignSelf:'center', }}>
                          <Text style={{}}>No villagers associated with this gift</Text>
                          </View>
                          </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
            ) :
            <Text style={[infoContainer, {marginTop:2}]}>There is nothing in Gifts</Text>

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
    fontSize:20,
    fontFamily: "Arial",
    fontWeight: 'bold',
    // marginTop:2,
    marginBottom:2,
    // alignContent:'center'
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
  preference: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 10,
    fontFamily: "Arial",
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
